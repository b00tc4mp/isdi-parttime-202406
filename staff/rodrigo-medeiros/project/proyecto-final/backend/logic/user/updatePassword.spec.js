import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { expect } from "chai";
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { updatePassword } from "./updatePassword.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Configuração segura do .env.test
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env.test") });

describe("updatePassword", function () {
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
    const hashedPassword = await bcrypt.hash("NewP@ssword0", 10);
    user = await User.create({
      username: "NombreTest",
      dateOfBirth: "1995-07-20",
      email: "nombre@mail.com",
      password: hashedPassword,
    });
  });

  it("should update the password successfully", async function () {
    const req = {
      body: {
        currentPassword: "NewP@ssword0",
        newPassword: "NewP@ssword1",
      },
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

  it("should fail if user does not exist", async function () {
    const req = {
      body: {
        currentPassword: "NewP@ssword0",
        newPassword: "NewP@ssword1",
      },
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

    await updatePassword(req, res);
    expect(res.statusCode).to.equal(404);
    expect(res.output.message).to.equal("User not found");
  });

  it("should fail if current password is incorrect", async function () {
    const req = {
      body: {
        currentPassword: "NewP@ssword2",
        newPassword: "NewP@ssword3",
      },
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

    await updatePassword(req, res);
    expect(res.statusCode).to.equal(401);
    expect(res.output.message).to.equal("Incorrect password");
  });

  it("should fail if required fields are missing", async function () {
    const req = {
      body: { newPassword: "NewP@ssword4" }, // currentPassword está faltando
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

    await updatePassword(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res.output.message).to.equal(
      "Current and new passwords are required"
    );
  });
});
