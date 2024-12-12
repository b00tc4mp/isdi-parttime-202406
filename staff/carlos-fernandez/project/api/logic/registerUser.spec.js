import "dotenv/config";
import registerUser from "./registerUser.js";
import { describe, it } from "mocha";
import models from "../data/models.js";
import mongoose, { Types } from "mongoose";
import { expect } from "chai";

const { User } = models;
const { ObjectId } = Types;

describe("Register user", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());

  it("Creates a new user", () => {
    return registerUser(
      "Carlos",
      "Fernandez",
      "666666666",
      "38383838J",
      "carlos@gmail.com",
      "aaAA1234@",
      "aaAA1234@"
    ).then(() => {
      User.findOne({ nif: "38878569J" }).then((user) => {
        expect(user.username).to.equal("Carlos");
        expect(user.surname).to.equal("Fernandez");
        expect(user.phoneNumber).to.equal("666666666");
        expect(user.nif).to.equal("38383838J");
        expect(user.email).to.equal("carlos@gmail.com");
        expect(user._id).to.be.instanceOf(ObjectId);
      });
    });
  });
});
