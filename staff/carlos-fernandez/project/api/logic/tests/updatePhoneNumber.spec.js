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

  it("Updates phone number", () => {
    const user = {
      username: "Testname",
      surname: "Surnametest",
      phoneNumber: "666333222",
      nif: "38878569J",
      email: "testemail@mail.com",
      password: "aaAA1234@",
    };
    return User.create(user).then((createdUser) => {
      const id = createdUser._id.toString();

      return updatePhoneNumber(id, "695506439").then(() => {
        return User.findOne({ username: "Testname" }).then((updatedUser) => {
          expect(updatedUser.phoneNumber).to.be.equal("695506439");
        });
      });
    });
  });

  /////////////////////////////////////// UNHAPPY PATH ///////////////////////////////////////

  it("Throws an error when the user doesn't exist", () => {
    const nonExistentUserId = new mongoose.Types.ObjectId().toString();

    return updatePhoneNumber(nonExistentUserId, "695506439").catch((error) => {
      expect(error).to.be.instanceOf(Errors.ExistenceError);
      expect(error.message).to.equal("No user with this ID");
    });
  });

  it("Throws an error when the phone number is not valid", () => {
    const user = {
      username: "Testname",
      surname: "Surnametest",
      phoneNumber: "666333222",
      nif: "38878569J",
      email: "testemail@mail.com",
      password: "aaAA1234@",
    };
    return User.create(user)
      .then((createdUser) => {
        const id = createdUser._id.toString();
        return updatePhoneNumber(id, "invalid-phone");
      })
      .catch((error) => {
        expect(error).to.be.instanceOf(Errors.PhoneNumberNotValidError);
        expect(error.message).to.include("Phone number format is not valid");
      });
  });
});
