import mongoose from "mongoose";
import { describe, it, before, beforeEach, afterEach, after } from "mocha";
import { expect } from "chai";
import User from "../../models/User.js";
import { getFavouriteRoutes } from "./getFavouriteRoutes.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import path from "path";

// Carregar o arquivo .env.test explicitamente
const envPath = path.resolve(".env.test");
dotenv.config({ path: envPath });

console.log("🚀 Arquivo .env.test carregado!");
console.log(
  "✅ MONGO_URI_TEST:",
  process.env.MONGO_URI_TEST || "❌ Não definida"
);

let user;

before(async function () {
  this.timeout(20000);
  await mongoose.connect(process.env.MONGO_URI_TEST);
});

beforeEach(function (done) {
  // ✅ Função normal TEM CONTEXTO this
  this.timeout(10000);

  (async () => {
    const hashedPassword = await bcrypt.hash("testPassword", 10);
    user = await User.create({
      username: "TestUser",
      dateOfBirth: "1995-07-20",
      email: "testuser@mail.com",
      password: hashedPassword,
      favouriteRoutes: [
        {
          from: "NYC",
          to: "LAX",
          departureDate: "2025-06-01",
          returnDate: "2025-06-10",
          adults: 1,
          children: 0,
          cabinClass: "economy",
        },
      ],
    });
    done();
  })().catch(done);
});

afterEach(async () => {
  await User.deleteMany();
});

after(async () => {
  await mongoose.disconnect();
});

describe("getFavouriteRoutes", () => {
  it("should retrieve all favourite routes successfully", async () => {
    const req = { user: { id: user._id } };
    const res = {
      json: function (output) {
        this.output = output;
      },
      status: function (code) {
        this.statusCode = code;
        return this;
      },
    };

    await getFavouriteRoutes(req, res);

    expect(res.statusCode).to.equal(200);
    expect(res.output).to.be.an("array");
    expect(res.output.length).to.equal(1);
    expect(res.output[0].from).to.equal("NYC");
    expect(res.output[0].to).to.equal("LAX");
  });

  it("should return an empty array if the user has no favourite routes", async () => {
    // Criar um usuário sem rotas favoritas
    const emptyUser = await User.create({
      username: "EmptyUser",
      dateOfBirth: "1990-01-01",
      email: "emptyuser@mail.com",
      password: await bcrypt.hash("testPassword", 10),
      favouriteRoutes: [],
    });

    const req = { user: { id: emptyUser._id } };
    const res = {
      json: function (output) {
        this.output = output;
      },
      status: function (code) {
        this.statusCode = code;
        return this;
      },
    };

    await getFavouriteRoutes(req, res);

    expect(res.statusCode).to.equal(200);
    expect(res.output).to.be.an("array");
    expect(res.output.length).to.equal(0);
  });

  it("should return 404 if user is not found", async () => {
    const req = { user: { id: new mongoose.Types.ObjectId() } };
    const res = {
      json: function (output) {
        this.output = output;
      },
      status: function (code) {
        this.statusCode = code;
        return this;
      },
    };

    await getFavouriteRoutes(req, res);

    expect(res.statusCode).to.equal(404);
    expect(res.output.message).to.equal("User not found");
  });
});
