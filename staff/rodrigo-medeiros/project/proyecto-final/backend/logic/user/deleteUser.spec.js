import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { describe, it, before, afterEach, after } from "mocha";
import { expect } from "chai";
import bcrypt from "bcryptjs";
import User from "../../models/User.js";
import { deleteUser } from "./deleteUser.js";

// Load the .env.test file explicitly
const envPath = path.resolve(".env.test");
dotenv.config({ path: envPath });

// Database setup for testing
before(function (done) {
  this.timeout(10000);
  mongoose
    .connect(process.env.MONGO_URI_TEST)
    .then(() => done())
    .catch((err) => done(err));
});

afterEach(async () => {
  await User.deleteMany();
});

after(async () => {
  await mongoose.disconnect();
});

describe("deleteUser", () => {
  it("should delete a user successfully when password is correct", async () => {
    const password = "testPassword";
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: "TestUser",
      email: "test@mail.com",
      password: hashedPassword,
      dateOfBirth: "1995-07-20",
    });

    const req = {
      user: { id: user._id.toString() }, // Simulates authenticated user
      body: { password },
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

    await deleteUser(req, res);

    const deletedUser = await User.findById(user._id);
    expect(deletedUser).to.be.null;
    expect(res.statusCode).to.equal(200);
    expect(res.output.message).to.equal("Account successfully deleted.");
  });

  it("should return 401 if password is incorrect", async () => {
    const user = await User.create({
      username: "TestUser",
      email: "test@mail.com",
      password: await bcrypt.hash("correctPassword", 10),
      dateOfBirth: "1995-07-20",
    });

    const req = {
      user: { id: user._id.toString() },
      body: { password: "wrongPassword" },
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

    await deleteUser(req, res);

    expect(res.statusCode).to.equal(401);
    expect(res.output.message).to.equal("Incorrect password.");
  });

  it("should return 404 if user is not found", async () => {
    const nonExistentId = new mongoose.Types.ObjectId().toString();
    const req = {
      user: { id: nonExistentId },
      body: { password: "anyPassword" },
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

    await deleteUser(req, res);

    expect(res.statusCode).to.equal(404);
    expect(res.output.message).to.equal("User not found.");
  });
});
