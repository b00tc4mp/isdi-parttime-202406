import "dotenv/config";
import getUser from "../getUser.js";
import { describe, it, afterEach, after, before } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";
import { Errors } from "common";

const { User } = models;

describe("Get user info from token", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  //////////////////////////////////////// HAPPY PATH ////////////////////////////////////////

  it("Returns a user when id is valid", async () => {
    const user = {
      username: "Elisabet",
      surname: "Matilda",
      phoneNumber: "667823432",
      nif: "38521456K",
      email: "elimati@gmail.com",
      password: "aaAA1234@",
    };

    return User.create(user).then((user) => {
      const id = user._id.toString();
      return getUser(id).then((userGot) => {
        expect(userGot.username).to.equal(user.username);
        expect(userGot.id).to.equal(id);
      });
    });
  });

  //////////////////////////////////////// UNHAPPY PATH ////////////////////////////////////////

  it("Throws an AuthError if user does not exist", () => {
    const nonExistentId = new mongoose.Types.ObjectId().toString();

    return getUser(nonExistentId)
      .then(() => {
        throw new Error("Test should have thrown an AuthError");
      })
      .catch((error) => {
        expect(error).to.be.an.instanceOf(Errors.AuthError);
        expect(error.message).to.deep.equal(
          "The provided user ID does not correspond to any user"
        );
      });
  });

  it("Throws a TypeError if id is not a valid string", async () => {
    const invalidId = 123; // ID no válido (número)

    try {
      await getUser(invalidId);
      throw new Error("Test should have thrown a TypeError"); // Si no hay error, falla
    } catch (error) {
      expect(error).to.be.an.instanceOf(TypeError);
      expect(error.message).to.equal("Id is not a string");
    }
  });
});
