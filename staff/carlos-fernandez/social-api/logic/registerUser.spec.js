import "dotenv/config";
import registerUser from "./registerUser.js";
import { describe, it } from "mocha";
import models from "../data/models.js";
import mongoose, { Types } from "mongoose";
import { expect } from "chai";

const { User } = models;
const { ObjectId } = Types;

describe("register user", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());

  it("creates a new user", () => {
    return registerUser(
      "django",
      "21/08/2000",
      "email@email.com",
      "aaAA1234@"
    ).then(() => {
      User.findOne({ username: "django" }).then((user) => {
        expect(user.username).to.equal("django");
        expect(user.email).to.equal("email@email.com");
        expect(user.dateOfBirth).to.deep.equal(new Date("21/08/2000"));
        expect(user._id).to.be.instanceOf(ObjectId);
      });
    });
  });
});

console.log(storage.users);
