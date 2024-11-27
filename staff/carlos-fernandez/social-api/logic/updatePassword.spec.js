import updatePassword from "./updatePassword.js";
import { expect } from "chai";
import models from "../data/models.js";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";
import { describe, it } from "mocha";

const { User } = models;

describe("Update password", () => {
  before(() => {
    mongoose.connect(process.env.MONGO_URI_TEST);
  });

  // Limpia la base de datos antes de empezar
  afterEach(() => User.deleteMany());

  it("should update the password of a valid user", () => {
    //encriptamos contraseña y creamos modelo de usuario
    return bcrypt.hash("oldpassword", 1).then((cryptPassword) => {
      const user = {
        username: "testuser",
        email: "oldemail@example.com",
        dateOfBirth: new Date("01/01/2000"),
        password: cryptPassword,
      };

      // creamos usuario y obtenemos su id
      return User.create(user).then((user) => {
        const id = user._id.toString();

        //pasamos la función updatePassword
        return updatePassword(id, "newpassword", "oldpassword").then(() => {
          //Buscamos el usuario
          return User.findOne({ username: "testuser" }).then((user) => {
            // aseguramos que la newPassword se ha encriptado bien y se ha actualizado
            return bcrypt
              .compare("newpassword", user.password)
              .then((isPasswordValid) => {
                expect(isPasswordValid).to.be.true;
              });
          });
        });
      });
    });
  });
});
