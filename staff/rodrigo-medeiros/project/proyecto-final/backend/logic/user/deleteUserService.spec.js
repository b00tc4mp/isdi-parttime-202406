import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import bcrypt from "bcryptjs";

import User from "../../models/User.js";
import { deleteUserService } from "./deleteUserService.js";
import {
  NotFoundError,
  CredentialsError,
  ServerError,
} from "../../tools/errors.js";

chai.use(chaiAsPromised);
const { expect } = chai;

dotenv.config({ path: path.resolve(process.cwd(), "backend/.env.test") });

describe("logic/user/deleteUserService", function () {
  this.timeout(10000);

  before(async () => {
    // Conecta sem opções deprecadas
    await mongoose.connect(process.env.MONGO_URI_TEST);
  });

  after(async () => {
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    await User.deleteMany();
  });

  afterEach(async () => {
    await User.deleteMany();
  });

  it("throws NotFoundError if user does not exist", async () => {
    const fakeId = new mongoose.Types.ObjectId().toString();
    await expect(deleteUserService(fakeId, "anyPassword")).to.be.rejectedWith(
      NotFoundError,
      "User not found."
    );
  });

  it("throws CredentialsError if password is incorrect", async () => {
    const plain = "password123";
    const hash = await bcrypt.hash(plain, 10);
    const user = await User.create({
      username: "User1",
      email: "u1@mail.com",
      password: hash,
    });

    await expect(
      deleteUserService(user._id.toString(), "wrongPassword")
    ).to.be.rejectedWith(CredentialsError, "Incorrect password.");
  });

  it("deletes the user and returns success message", async () => {
    const plain = "secret";
    const hash = await bcrypt.hash(plain, 10);
    const user = await User.create({
      username: "User2",
      email: "u2@mail.com",
      password: hash,
    });

    const result = await deleteUserService(user._id.toString(), plain);
    expect(result).to.deep.equal({ message: "Account successfully deleted." });

    // Confirma exclusão
    const found = await User.findById(user._id);
    expect(found).to.be.null;
  });

  it("throws ServerError if DB deletion fails", async () => {
    const plain = "password";
    const hash = await bcrypt.hash(plain, 10);
    const user = await User.create({
      username: "User3",
      email: "u3@mail.com",
      password: hash,
    });

    // Simula falha no delete
    const orig = User.findByIdAndDelete;
    User.findByIdAndDelete = () => {
      throw new Error("DB down");
    };

    await expect(
      deleteUserService(user._id.toString(), plain)
    ).to.be.rejectedWith(ServerError, "Failed to delete user.");

    // Restaura comportamento original
    User.findByIdAndDelete = orig;
  });
});
