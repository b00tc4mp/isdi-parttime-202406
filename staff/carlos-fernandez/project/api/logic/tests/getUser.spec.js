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

  it("Returns a user if user exists", () => {
    const user = {
      username: "Carlos",
      surname: "Bock",
      phoneNumber: "612435926",
      nif: "38795701Z",
      email: "carlosbock@gmail.com",
      password: "hashedpassword",
    };

    // Creamos usuario
    User.create(user)
      .then((savedUser) => {
        const stringedId = savedUser._id.toString();

        // Traemos el usuario creado mediante el ID obtenido anteriormente
        return getUser(stringedId);
      })

      // Si sale bien, el usuario consultado con getUser (userRequested) deberia ser igual al creado (savedUser)
      .then((userRequested) => {
        expect(userRequested).to.deep.equal(savedUser);
      })

      // Si hay error, el mensaje de error debería ser el que lanza la lógica
      .catch((error) => {
        expect(error.message).to.equal(
          "The provided user ID does not correspond to any user"
        );
      });
  });

  //////////////////////////////////////// UNHAPPY PATH ////////////////////////////////////////

  it("Throws an error if id is not valid", () => {
    // ID INVENTADO
    const nonExistentId = "invalid_id";
    try {
      getUser(nonExistentId);
    } catch (error) {
      expect(error.message).to.equal("Invalid ID format");
    }
  });

  it("Throws an error if user it doesn't exist", () => {
    const existentId = "6762d9a87e65a2d92c12836e";
    return getUser(existentId)
      .then()
      .catch((error) => {
        expect(error.message).to.equal(
          "The provided user ID does not correspond to any user"
        );
      });
  });
});
