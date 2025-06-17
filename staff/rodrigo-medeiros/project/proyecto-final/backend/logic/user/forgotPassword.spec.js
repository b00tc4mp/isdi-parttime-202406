import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { expect } from "chai";
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { forgotPassword } from "../../logic/user/forgotPassword.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Configuração do .env.test
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env.test") });

describe("forgotPassword", function () {
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
    const hashedPassword = await bcrypt.hash("OldP@ssword0", 10);
    user = await User.create({
      username: "TestUser",
      dateOfBirth: "1990-01-01",
      email: "testuser@mail.com",
      password: hashedPassword,
    });
  });

  it("should successfully reset the password with correct email and DOB", async function () {
    const req = {
      body: {
        email: "testuser@mail.com",
        dateOfBirth: "1990-01-01",
        newPassword: "NewP@ssword1",
      },
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

    await forgotPassword(req, res);

    const updatedUser = await User.findOne({ email: "testuser@mail.com" });
    const isPasswordUpdated = await bcrypt.compare(
      "NewP@ssword1",
      updatedUser.password
    );

    expect(isPasswordUpdated).to.be.true;
    expect(res.statusCode).to.equal(200);
    expect(res.output.message).to.equal("Password successfully updated.");
  });

  it("should return 404 if user is not found", async function () {
    const req = {
      body: {
        email: "nonexistent@mail.com",
        dateOfBirth: "1990-01-01",
        newPassword: "NewP@ssword2",
      },
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

    await forgotPassword(req, res);

    expect(res.statusCode).to.equal(404);
    expect(res.output.message).to.equal("User not found.");
  });

  it("should return 401 if date of birth does not match", async function () {
    const req = {
      body: {
        email: "testuser@mail.com",
        dateOfBirth: "1980-12-31",
        newPassword: "NewP@ssword3",
      },
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

    await forgotPassword(req, res);

    expect(res.statusCode).to.equal(401);
    expect(res.output.message).to.equal(
      "Date of birth does not match our records."
    );
  });

  it("should return 400 if required fields are missing", async function () {
    const req = {
      body: {
        email: "testuser@mail.com",
        // dateOfBirth is missing
        newPassword: "NewP@ssword4",
      },
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

    await forgotPassword(req, res);

    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal(
      "Email, date of birth, and new password are required."
    );
  });
});
