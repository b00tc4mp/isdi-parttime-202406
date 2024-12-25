import "dotenv/config";
import updatePassword from "../updatePassword.js";
import { describe, it } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";
import bcrypt from "bcrypt";

const { User } = models;

describe("Update password", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  it("Updates password", () => {
    return bcrypt.hash("aaAA1234@", 10).then((cryptPassword) => {
      const user = {
        username: "Testname",
        surname: "Surnametest",
        phoneNumber: "666333222",
        nif: "38878569J",
        email: "testemail@mail.com",
        password: cryptPassword,
      };
      return User.create(user).then((user) => {
        const id = user._id.toString();
        return updatePassword(id, "aAaA1234@", "aaAA1234@").then(() => {
          return User.findOne({ username: "Testname" }).then((user) => {
            return bcrypt
              .compare("aAaA1234@", user.password)
              .then((isPasswordValid) => {
                expect(isPasswordValid).to.be.true;
              });
          });
        });
      });
    });
  });

  /////////////////////////////////////// UNHAPPY PATH ///////////////////////////////////////
  it("Fails when old password is incorrect", () => {
    return bcrypt.hash("aaAA1234@", 10).then((cryptPassword) => {
      const user2 = {
        username: "Testnametwo",
        surname: "Testsurnametwo",
        phoneNumber: "622444512",
        nif: "38521478C",
        email: "testemailtwo@mail.com",
        password: cryptPassword,
      };
      return User.create(user2).then((user) => {
        const id = user._id.toString();
        return updatePassword(id, "aAAa1234@", "wrongPassword").catch(
          (error) => {
            expect(error).to.exist;
            expect(error.message).to.equal("Wrong Password");
          }
        );
      });
    });
  });

  it("Fails when user ID is invalid", () => {
    const invalidUserId = "invalidUserId123";
    // Lo hago así porque es síncrono
    expect(() => {
      updatePassword(invalidUserId, "aAaA1234@", "aaAA1234@");
    }).to.throw("Invalid ID format");
  });
});
