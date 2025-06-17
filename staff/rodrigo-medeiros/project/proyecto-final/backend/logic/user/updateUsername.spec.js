import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { expect } from "chai";
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { updateUsername } from "./updateUsername.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Carrega variáveis de ambiente de .env.test
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env.test") });

describe("updateUsername", function () {
  this.timeout(15000);

  let user;

  before(async function () {
    const uri = process.env.MONGO_URI_TEST;
    if (!uri) throw new Error("MONGO_URI_TEST não definida");
    await mongoose.connect(uri);
  });

  after(async function () {
    await mongoose.disconnect();
  });

  afterEach(async function () {
    await User.deleteMany();
  });

  beforeEach(async function () {
    const hashedPassword = await bcrypt.hash("cryptPassword", 10);
    user = await User.create({
      username: "NombreTest",
      dateOfBirth: "1995-07-20",
      email: "nombre@mail.com",
      password: hashedPassword,
    });
  });

  it("should update the username successfully", async function () {
    const req = {
      body: { username: "NewUsername", password: "cryptPassword" },
      user: { id: user._id },
    };
    const res = {
      output: {},
      statusCode: null,
      json(output) {
        this.output = output;
      },
      status(code) {
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

  it("should fail if user does not exist", async function () {
    const req = {
      body: { username: "NewUsername", password: "cryptPassword" },
      user: { id: new mongoose.Types.ObjectId() },
    };
    const res = {
      output: {},
      statusCode: null,
      json(output) {
        this.output = output;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
    };

    await updateUsername(req, res);
    expect(res.statusCode).to.equal(404);
    expect(res.output.message).to.equal("User not found");
  });

  it("should fail if password is incorrect", async function () {
    const req = {
      body: { username: "NewUsername", password: "wrongPassword" },
      user: { id: user._id },
    };
    const res = {
      output: {},
      statusCode: null,
      json(output) {
        this.output = output;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
    };

    await updateUsername(req, res);
    expect(res.statusCode).to.equal(401);
    expect(res.output.message).to.equal("Invalid password");
  });

  it("should fail if username is not provided", async function () {
    const req = {
      body: { password: "cryptPassword" },
      user: { id: user._id },
    };
    const res = {
      output: {},
      statusCode: null,
      json(output) {
        this.output = output;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
    };

    await updateUsername(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal("Username and password are required");
  });
});
