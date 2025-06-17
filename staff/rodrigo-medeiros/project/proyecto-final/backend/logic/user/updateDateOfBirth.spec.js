import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { expect } from "chai";
import User from "../../models/User.js";
import { updateDateOfBirth } from "./updateDateOfBirth.js";
import bcrypt from "bcrypt";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Resolvendo caminho absoluto do .env.test
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env.test") });

describe("updateDateOfBirth", function () {
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

  it("should update the date of birth successfully", async function () {
    const req = {
      body: { dateOfBirth: "2000-05-15", password: "cryptPassword" },
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

    await updateDateOfBirth(req, res);

    const updatedUser = await User.findById(user._id);
    expect(updatedUser.dateOfBirth).to.equal("2000-05-15");
    expect(res.statusCode).to.equal(200);
    expect(res.output.message).to.equal(
      "Date of birth atualizado com sucesso!"
    );
  });

  it("should fail if user does not exist", async function () {
    const req = {
      body: { dateOfBirth: "2000-05-15", password: "cryptPassword" },
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

    await updateDateOfBirth(req, res);
    expect(res.statusCode).to.equal(404);
    expect(res.output.message).to.equal("User not found");
  });

  it("should fail if password is incorrect", async function () {
    const req = {
      body: { dateOfBirth: "2000-05-15", password: "wrongPassword" },
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

    await updateDateOfBirth(req, res);
    expect(res.statusCode).to.equal(401);
    expect(res.output.message).to.equal("Invalid password");
  });

  it("should fail if dateOfBirth is not provided", async function () {
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

    await updateDateOfBirth(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal(
      "Date of birth and password are required"
    );
  });
});
