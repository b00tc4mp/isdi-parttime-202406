import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { expect } from "chai";
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { registerUser } from "./registerUser.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Corrige caminho do .env.test
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = path.resolve(__dirname, "../../.env.test");
dotenv.config({ path: envPath });

describe("registerUser", function () {
  this.timeout(15000);

  before(async function () {
    const uri = process.env.MONGO_URI_TEST;
    if (!uri) throw new Error("MONGO_URI_TEST não definida");
    await mongoose.connect(uri);
  });

  afterEach(async () => {
    await User.deleteMany();
  });

  after(async () => {
    await mongoose.disconnect();
  });

  it("should register a new user successfully", async () => {
    await registerUser(
      "TestUser",
      "test@mail.com",
      "testPassword",
      "1995-07-20"
    );

    const createdUser = await User.findOne({ email: "test@mail.com" });
    expect(createdUser).to.exist;
    expect(createdUser.username).to.equal("TestUser");
    expect(await bcrypt.compare("testPassword", createdUser.password)).to.be
      .true;
  });

  it("should fail if email is already registered", async () => {
    await User.create({
      username: "ExistingUser",
      email: "existing@mail.com",
      password: await bcrypt.hash("password", 10),
      dateOfBirth: "1990-01-01",
    });

    try {
      await registerUser(
        "TestUser",
        "existing@mail.com",
        "testPassword",
        "1995-07-20"
      );
    } catch (error) {
      expect(error).to.exist;
      expect(error.message).to.equal("Email already registered");
    }
  });

  it("should fail if required fields are missing", async () => {
    try {
      await registerUser("TestUser", "", "testPassword", "1995-07-20");
    } catch (error) {
      expect(error).to.exist;
    }
  });
});
