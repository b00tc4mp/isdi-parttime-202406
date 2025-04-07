/*import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { describe, it, before, afterEach, after } from "mocha";
import { expect } from "chai";
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import registerUser from "./registerUser.js";

// Carregar o arquivo .env.test explicitamente
const envPath = path.resolve(".env.test");
dotenv.config({ path: envPath });

console.log("🚀 Arquivo .env.test carregado!");
console.log(
  "✅ MONGO_URI_TEST:",
  process.env.MONGO_URI_TEST || "❌ Não definida"
);

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

describe("registerUser", () => {
  it("should register a new user successfully", async () => {
    const req = {
      body: {
        username: "TestUser",
        email: "test@mail.com",
        password: "testPassword",
        dateOfBirth: "1995-07-20",
      },
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

    await registerUser(req, res);

    const createdUser = await User.findOne({ email: "test@mail.com" });
    expect(createdUser).to.exist;
    expect(createdUser.username).to.equal("TestUser");
    expect(res.statusCode).to.equal(201);
    expect(res.output.message).to.equal("Usuário registrado com sucesso!");
  });

  it("should fail if email is already registered", async () => {
    await User.create({
      username: "ExistingUser",
      email: "existing@mail.com",
      password: await bcrypt.hash("password", 10),
      dateOfBirth: "1990-01-01",
    });

    const req = {
      body: {
        username: "TestUser",
        email: "existing@mail.com",
        password: "testPassword",
        dateOfBirth: "1995-07-20",
      },
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

    await registerUser(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal("Email já cadastrado!");
  });

  it("should fail if required fields are missing", async () => {
    const req = {
      body: {
        username: "TestUser",
        email: "",
        password: "testPassword",
        dateOfBirth: "1995-07-20",
      },
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

    await registerUser(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal("All fields are required.");
  });
});
*/
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { describe, it, before, afterEach, after } from "mocha";
import { expect } from "chai";
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { registerUser } from "./registerUser.js";

// Carregar o arquivo .env.test explicitamente
const envPath = path.resolve(".env.test");
dotenv.config({ path: envPath });

console.log("🚀 Arquivo .env.test carregado!");
console.log(
  "✅ MONGO_URI_TEST:",
  process.env.MONGO_URI_TEST || "❌ Não definida"
);

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

describe("registerUser", () => {
  it("should register a new user successfully", async () => {
    const req = {
      body: {
        username: "TestUser",
        email: "test@mail.com",
        password: "testPassword",
        dateOfBirth: "1995-07-20",
      },
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

    await registerUser(req, res);

    const createdUser = await User.findOne({ email: "test@mail.com" });
    expect(createdUser).to.exist;
    expect(createdUser.username).to.equal("TestUser");
    expect(res.statusCode).to.equal(201);
    expect(res.output.message).to.equal("Usuário registrado com sucesso!");
  });

  it("should fail if email is already registered", async () => {
    await User.create({
      username: "ExistingUser",
      email: "existing@mail.com",
      password: await bcrypt.hash("password", 10),
      dateOfBirth: "1990-01-01",
    });

    const req = {
      body: {
        username: "TestUser",
        email: "existing@mail.com",
        password: "testPassword",
        dateOfBirth: "1995-07-20",
      },
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

    await registerUser(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal("Email já registrado.");
  });

  it("should fail if required fields are missing", async () => {
    const req = {
      body: {
        username: "TestUser",
        email: "", // campo email vazio
        password: "testPassword",
        dateOfBirth: "1995-07-20",
      },
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

    await registerUser(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal("Todos os campos são obrigatórios.");
  });
});
