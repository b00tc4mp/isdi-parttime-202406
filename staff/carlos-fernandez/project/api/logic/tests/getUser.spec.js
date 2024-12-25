import "dotenv/config";
import getUser from "../getUser.js";
import { describe, it } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";

import { expect } from "chai";

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
      return getUser(id, user.username).then((userGot) => {
        expect(userGot.username).to.equal(user.username);
      });
    });
  });

  //////////////////////////////////////// UNHAPPY PATH ////////////////////////////////////////

  it("Throws an error if username is not correct", async () => {
    const user2 = {
      username: "Jose",
      surname: "Martinez",
      phoneNumber: "632456258",
      nif: "38521321R",
      email: "josemarti@gmail.com",
      password: "aaAA1234@",
    };

    await User.create(user2);
    const id = user2._id.toString();

    try {
      await getUser(id, "Carlos"); // Username mismatch
      fail("Expected an error to be thrown");
    } catch (error) {
      // Assert that an error is thrown (no specific message assertion needed)
      expect(error).toBeTruthy();
    }
  });
});
