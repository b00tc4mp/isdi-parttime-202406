import "dotenv/config";
import getUsername from "./getUsername.js";
import { describe, it } from "mocha";
import models from "../data/models.js";
import mongoose from "mongoose";

import { expect } from "chai";

const { User } = models;

describe("Get username from token", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  //////////////////// HAPPY PATH ////////////////////

  it("Returns username if user exists", async () => {
    const user = {
      username: "Carlos",
      surname: "Fernandez",
      phoneNumber: "666666666",
      nif: "38878569J",
      email: "carlos@gmail.com",
      password: "hashedpassword",
    };

    const savedUser = await User.create(user);

    // ID PASADO A STRING
    const stringedId = savedUser._id.toString();
    const username = await getUsername(stringedId);
    expect(username).to.equal(savedUser.username);
  });

  //////////////////// UNHAPPY PATH ////////////////////

  it("Throws an error if id is not valid", () => {
    // ID INVENTADO
    const nonExistentId = "invalid_id";
    try {
      getUsername(nonExistentId);
    } catch (error) {
      expect(error.message).to.equal("Invalid ID format");
    }
  });

  it("Throws an error if user it doesn't exist", async () => {
    const existentId = "6762d9a87e65a2d92c12836e";
    try {
      await getUsername(existentId);
    } catch (error) {
      expect(error.message).to.equal("User id doesn't belong to anyone");
    }
  });
});
