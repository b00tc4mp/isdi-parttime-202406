import updateEmail from "./updateEmail.js";
import { expect } from "chai";
import models from "../data/models.js";
import mongoose from "mongoose";
import "dotenv/config";

const { User } = models;

describe("Update email", () => {
  before(() => {
    mongoose.connect(process.env.MONGO_URI_TEST, {});
  });

  // Limpia la base de datos antes de empezar
  afterEach(() => User.deleteMany());
  // Desconecta de la base de datos al finalizar todos los tests
  after(() => {
    mongoose.disconnect();
  });

  it("should update the email of a valid user", () => {
    return User.create({
      username: "testuser",
      email: "oldemail@example.com",
      dateOfBirth: new Date("01/01/2000"),
      password: "hashedpassword",
    }).then((user) => {
      const userId = user._id.toString();
      const newEmail = "newemail@example.com";
      return updateEmail(userId, newEmail).then(() => {
        return User.findById(userId).then((updatedUser) => {
          expect(updatedUser.email).to.equal(newEmail);
        });
      });
    });
  });
});
