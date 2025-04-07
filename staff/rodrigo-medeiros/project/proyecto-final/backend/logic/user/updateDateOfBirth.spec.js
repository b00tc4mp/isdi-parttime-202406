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

import mongoose from "mongoose";
import { describe, it, before, afterEach, after } from "mocha";
import { expect } from "chai";
import User from "../../models/User.js";
import { updateDateOfBirth } from "./updateDateOfBirth.js";
import bcrypt from "bcrypt";

// Configuração do banco de teste
before(function (done) {
  this.timeout(10000);
  mongoose
    .connect(process.env.MONGO_URI_TEST)
    .then(() => {
      console.log("✅ Conectado ao MongoDB de teste com sucesso!");
      done();
    })
    .catch((err) => {
      console.error("❌ Erro ao conectar ao MongoDB:", err);
      done(err);
    });
});

afterEach(() => User.deleteMany());
after(() => mongoose.disconnect());

describe("updateDateOfBirth", () => {
  let user;

  beforeEach(async () => {
    const hashedPassword = await bcrypt.hash("cryptPassword", 10);
    user = await User.create({
      username: "NombreTest",
      dateOfBirth: "1995-07-20",
      email: "nombre@mail.com",
      password: hashedPassword,
    });
  });

  it("should update the date of birth successfully", async () => {
    const req = {
      body: { dateOfBirth: "2000-05-15", password: "cryptPassword" },
      user: { id: user._id },
    };
    const res = {
      json: function (output) {
        this.output = output;
      },
      status: function (code) {
        this.statusCode = code;
        return this;
      },
    };

    await updateDateOfBirth(req, res);

    const updatedUser = await User.findById(user._id);
    expect(updatedUser.dateOfBirth).to.equal("2000-05-15");
    expect(res.statusCode).to.equal(200);
    expect(res.output.message).to.equal(
      "Date of birth atualizado com sucesso!"
    );
  });

  it("should fail if user does not exist", async () => {
    const req = {
      body: { dateOfBirth: "2000-05-15", password: "cryptPassword" },
      user: { id: new mongoose.Types.ObjectId() },
    };
    const res = {
      json: function (output) {
        this.output = output;
      },
      status: function (code) {
        this.statusCode = code;
        return this;
      },
    };

    await updateDateOfBirth(req, res);
    expect(res.statusCode).to.equal(404);
    expect(res.output.message).to.equal("User not found");
  });

  it("should fail if password is incorrect", async () => {
    const req = {
      body: { dateOfBirth: "2000-05-15", password: "wrongPassword" },
      user: { id: user._id },
    };
    const res = {
      json: function (output) {
        this.output = output;
      },
      status: function (code) {
        this.statusCode = code;
        return this;
      },
    };

    await updateDateOfBirth(req, res);
    expect(res.statusCode).to.equal(401);
    expect(res.output.message).to.equal("Invalid password");
  });

  it("should fail if dateOfBirth is not provided", async () => {
    const req = {
      body: { password: "cryptPassword" },
      user: { id: user._id },
    };
    const res = {
      json: function (output) {
        this.output = output;
      },
      status: function (code) {
        this.statusCode = code;
        return this;
      },
    };

    await updateDateOfBirth(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal(
      "Date of birth and password are required"
    );
  });
});
