import "dotenv/config";
import createPost from "./createPost.js";
import { describe, it } from "mocha";
import models from "../data/models.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { expect } from "chai";

//Importar el modelo User y el modelo Post
const { User, Post } = models;

describe("createPost", () => {
  //Conectar a la base de datos
  before(() => {
    return mongoose.connect(process.env.MONGO_URI_TEST);
  });

  // Limpiar después de cada test. Usamos promise porque ambas son asíncronas
  afterEach(() => {
    return Promise.all([User.deleteMany(), Post.deleteMany()]);
  });

  ////////// HAPPY PATH //////////
  it("create a post if all content is correct", () => {
    // encriptar contraseña + crear nuevo user
    return bcrypt.hash("123456789", 1).then((cryptPassword) => {
      const user = {
        username: "NombreTest",
        dateOfBirth: new Date("07/20/1995"),
        email: "nombre@mail.com",
        password: cryptPassword,
      };
      return User.create(user)
        .then((user) => {
          // crear post pasando el id + contenido
          return createPost(user._id.toString(), "HOLA ES UN POST");
        })
        .then(() => {
          // se espera que el contenido sea content
          return Post.findOne({ content: "HOLA ES UN POST" });
        })
        .then((post) => {
          expect(post).to.exist; //el post existe
          expect(post).to.have.property("content", "HOLA ES UN POST");
          expect(post).to.have.property("author"); // Verificar que el autor está presente
        });
    });
  });
});
