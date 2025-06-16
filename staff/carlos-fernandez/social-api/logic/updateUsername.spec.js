import updateUsername from "./updateUsername.js";
import { expect } from "chai";
import models from "../data/models.js";
import mongoose from "mongoose";
import "dotenv/config";

const { User } = models;

describe("Update username", () => {
  before(() => {
    mongoose.connect(process.env.MONGO_URI_TEST, {});
  });

  // Limpia la base de datos antes de empezar
  afterEach(() => User.deleteMany());
  // Desconecta de la base de datos al finalizar todos los tests
  after(() => {
    mongoose.disconnect();
  });

  it("should update the username", () => {
    return User.create({
      username: "testuser",
      email: "test@mail.com",
      dateOfBirth: new Date("01/01/2000"),
      password: "password",
    }).then((user) => {
      const id = user._id.toString();
      const newUsername = "newusername";
      return updateUsername(id, newUsername).then(() => {
        return User.findById(id).then((updatedUser) => {
          expect(updatedUser.username).to.equal(newUsername);
        });
      });
    });
  });
});
