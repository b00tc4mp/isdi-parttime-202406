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
import { updateUsername } from "./updateUsername.js";
import bcrypt from "bcrypt";

// Configuração do banco de teste
before(function (done) {
  this.timeout(10000); // Aumenta o tempo limite para 10 segundos

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

describe("updateUsername", () => {
  let user;

  beforeEach(async () => {
    const hashedPassword = await bcrypt.hash("cryptPassword", 10);
    user = await User.create({
      username: "NombreTest",
      dateOfBirth: new Date("07/20/1995"),
      email: "nombre@mail.com",
      password: hashedPassword,
    });
  });

  it("should update the username successfully", async () => {
    const req = {
      body: { username: "NewUsername", password: "cryptPassword" },
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

    await updateUsername(req, res);

    const updatedUser = await User.findById(user._id);
    expect(updatedUser.username).to.equal("NewUsername");
    expect(res.statusCode).to.equal(200);
    expect(res.output.message).to.equal("Username atualizado com sucesso!");
  });

  it("should fail if user does not exist", async () => {
    const req = {
      body: { username: "NewUsername", password: "cryptPassword" },
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

    await updateUsername(req, res);
    expect(res.statusCode).to.equal(404);
    expect(res.output.message).to.equal("User not found");
  });

  it("should fail if password is incorrect", async () => {
    const req = {
      body: { username: "NewUsername", password: "wrongPassword" },
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

    await updateUsername(req, res);
    expect(res.statusCode).to.equal(401);
    expect(res.output.message).to.equal("Invalid password");
  });

  it("should fail if username is not provided", async () => {
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

    await updateUsername(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal("Username and password are required");
  });
});
