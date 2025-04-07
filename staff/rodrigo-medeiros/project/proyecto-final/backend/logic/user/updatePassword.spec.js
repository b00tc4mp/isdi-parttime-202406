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
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { updatePassword } from "./updatePassword.js";

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

afterEach(async () => await User.deleteMany());
after(async () => await mongoose.disconnect());

describe("updatePassword", () => {
  let user;

  beforeEach(async () => {
    const hashedPassword = await bcrypt.hash("NewP@ssword0", 10);
    user = await User.create({
      username: "NombreTest",
      dateOfBirth: new Date("1995-07-20"),
      email: "nombre@mail.com",
      password: hashedPassword,
    });
  });

  it("should update the password successfully", async () => {
    const req = {
      body: {
        currentPassword: "NewP@ssword0",
        newPassword: "NewP@ssword1",
      },
      user: { id: user._id },
    };
    const res = {
      json(output) {
        this.output = output;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
    };

    await updatePassword(req, res);

    const updatedUser = await User.findById(user._id);
    const isPasswordUpdated = await bcrypt.compare(
      "NewP@ssword1",
      updatedUser.password
    );

    expect(isPasswordUpdated).to.be.true;
    expect(res.statusCode).to.equal(200);
    expect(res.output.message).to.equal("Password atualizado com sucesso!");
  });

  it("should fail if user does not exist", async () => {
    const req = {
      body: {
        currentPassword: "NewP@ssword0",
        newPassword: "NewP@ssword1",
      },
      user: { id: new mongoose.Types.ObjectId() },
    };
    const res = {
      json(output) {
        this.output = output;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
    };

    await updatePassword(req, res);
    expect(res.statusCode).to.equal(404);
    expect(res.output.message).to.equal("User not found");
  });

  it("should fail if current password is incorrect", async () => {
    const req = {
      body: {
        currentPassword: "NewP@ssword2",
        newPassword: "NewP@ssword3",
      },
      user: { id: user._id },
    };
    const res = {
      json(output) {
        this.output = output;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
    };

    await updatePassword(req, res);
    if (res.statusCode !== 401) {
      console.error("Erro esperado: 401, mas recebeu:", res.statusCode);
    }
    expect(res.statusCode).to.equal(401);

    expect(res.output.message).to.equal("Incorrect password");
  });

  it("should fail if required fields are missing", async () => {
    const req = {
      body: { newPassword: "NewP@ssword4" }, // currentPassword está faltando
      user: { id: user._id },
    };
    const res = {
      json(output) {
        this.output = output;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
    };

    await updatePassword(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal(
      "Current and new passwords are required"
    );
  });
});
