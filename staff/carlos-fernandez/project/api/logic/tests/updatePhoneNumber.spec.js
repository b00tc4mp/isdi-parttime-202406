import "dotenv/config";
import updatePhoneNumber from "../updatePhoneNumber.js";
import { describe, it } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";
import { Errors } from "common";

const { User } = models;

describe("Update phone number", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  it("Updates phone number", async () => {
    try {
      const user = {
        username: "Testname",
        surname: "Surnametest",
        phoneNumber: "666333222",
        nif: "38878569J",
        email: "testemail@mail.com",
        password: "aaAA1234@",
      };
      const createdUser = await User.create(user);
      const id = createdUser._id.toString();

      await updatePhoneNumber(id, "695506439");

      const updatedUser = await User.findOne({ username: "Testname" });

      expect(updatedUser.phoneNumber).to.be.equal("695506439");
    } catch (error) {
      console.error("Error updating phone number:", error);
      throw error;
    }
  });

  /////////////////////////////////////// UNHAPPY PATH ///////////////////////////////////////

  it("Throws an error when the user doesn't exist", async () => {
    const nonExistentUserId = new mongoose.Types.ObjectId().toString();

    try {
      await updatePhoneNumber(nonExistentUserId, "695506439");
      throw new Error("Expected error not thrown");
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.ExistenceError);
      expect(error.message).to.equal("No user with this ID");
    }
  });

  it("Throws an error when the phone number is not valid", async () => {
    try {
      const user = {
        username: "Testname",
        surname: "Surnametest",
        phoneNumber: "666333222",
        nif: "38878569J",
        email: "testemail@mail.com",
        password: "aaAA1234@",
      };
      const createdUser = await User.create(user);
      const id = createdUser._id.toString();

      await updatePhoneNumber(id, "invalid-phone");
      throw new Error("Expected error was not thrown");
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.PhoneNumberNotValidError);
      expect(error.message).to.include("Phone number format is not valid");
    }
  });
});
