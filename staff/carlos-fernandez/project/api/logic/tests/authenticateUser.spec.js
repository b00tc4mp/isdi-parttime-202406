import "dotenv/config";
import authenticateUser from "../authenticateUser.js";
import { describe, it } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { expect } from "chai";

const { User } = models;

describe("Authenticate user", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  it("Returns id if user exist and password is correct", () => {
    return bcrypt.hash("aaAA1234@", 1).then((cryptPassword) => {
      const user = {
        username: "Test name",
        surname: "Test surname",
        phoneNumber: "654654321",
        nif: "38878569J",
        email: "nameone@gmail.com",
        password: cryptPassword,
      };
      return User.create(user).then((user) => {
        return authenticateUser("nameone@gmail.com", "aaAA1234@").then((id) => {
          expect(id).to.equal(user._id.toString());
        });
      });
    });
  });

  it('Throws "No user with this email" if user does not exist', () => {
    return authenticateUser("nombre@mail.com", "contraseña-aleatoria1")
      .then(() => {})
      .catch((error) => {
        expect(error.message).to.equal("No user with this email");
      });
  });

  it('Throws "Password wrong" if password is not correct', () => {
    return bcrypt.hash("aaAA1234@", 1).then((cryptPassword) => {
      const user = {
        username: "Test name",
        surname: "Test surname",
        phoneNumber: "654654321",
        nif: "38878569J",
        email: "nametwo@gmail.com",
        password: cryptPassword,
      };
      return User.create(user).then((user) => {
        return authenticateUser("nametwo@gmail.com", "wrong-password")
          .then(() => {})
          .catch((error) => {
            expect(error.message).to.equal("Wrong password");
          });
      });
    });
  });
});
