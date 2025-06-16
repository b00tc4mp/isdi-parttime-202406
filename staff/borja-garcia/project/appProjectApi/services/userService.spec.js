import mongoose from "mongoose";
import { describe, it, before, afterEach, after } from "mocha";
import { expect } from "chai";
import * as service from "../services/userService.js";
import User from "../models/users.js";
import "dotenv/config";
import bcrypt from "bcrypt";
describe("User Service Tests", () => {
  before(async () => mongoose.connect(process.env.MONGO_URI_TEST));

  afterEach(async () => {
    await User.deleteMany();
  });

  after(async () => mongoose.disconnect());

  // -------------------------------
  // createUser
  // -------------------------------
  describe("createUser", () => {
    it("crea un usuario exitosamente", async () => {
      const user = {
        email: "test@test.com",
        username: "Batman",
        password: "Panda.123",
        repeatPassword: "Panda.123",
      };

      const createdUser = await service.createUser(user);
      expect(createdUser).to.have.property("email", "test@test.com");
      expect(createdUser).to.have.property("username", "Batman");
      expect(createdUser.password).not.to.be.null;
    });

    it("lanza error si las contraseñas no coinciden", async () => {
      const user = {
        email: "test@test.com",
        username: "Batman",
        password: "Panda.123",
        repeatPassword: "Panda.122",
      };

      try {
        await service.createUser(user);
      } catch (error) {
        expect(error.message).to.equal(
          "Error al procesar el usuario: Las contraseñas no coinciden"
        );
      }
    });

    it("lanza error por duplicidad de email/usuario", async () => {
      const user = {
        email: "duplicado@test.com",
        username: "Duplicado",
        password: "Panda.123",
        repeatPassword: "Panda.123",
      };
      await service.createUser(user);

      try {
        await service.createUser(user);
      } catch (error) {
        expect(error.message).to.equal(
          "Error al procesar el usuario: El nombre de usuario o el email ya existen"
        );
      }

      try {
        await service.createUser(user);
      } catch (error) {
        expect(error.message).to.include("El nombre de usuario o el email ya existen");
      }

    });

    it("lanza error por datos inválidos", async () => {
      const invalidUser = {
        email: "invalido",
        password: "Panda.123",
        repeatPassword: "Panda.123",
      };

      try {
        await service.createUser(invalidUser);
      } catch (error) {
        expect(error.message).to.include("Error al procesar el usuario");
      }
    });
  });

  // -------------------------------
  // getUsers
  // -------------------------------
  describe("getUsers", () => {
    it("retorna todos los usuarios", async () => {
      await User.create([
        { username: "User1", email: "user1@test.com", password: "Password.1" },
        { username: "User2", email: "user2@test.com", password: "Password.2" },
      ]);

      const result = await service.getUsers();
      expect(result).to.be.an("array").with.length(2);
    });

    it("lanza error si no hay usuarios", async () => {
      try {
        await service.getUsers();
      } catch (error) {
        expect(error.message).to.equal("No se han encontrado usuarios");
      }
    });
  });

  // -------------------------------
  // deleteUserById
  // -------------------------------
  describe("deleteUserById", () => {
    it("elimina un usuario exitosamente", async () => {
      const user = await User.create({
        username: "ToDelete",
        email: "delete@test.com",
        password: "Password.1",
      });

      const result = await service.deleteUserById(user._id);
      expect(result).to.have.property("_id").deep.equal(user._id);
    });

    it("lanza error si el usuario no existe", async () => {
      try {
        await service.deleteUserById(new mongoose.Types.ObjectId());
      } catch (error) {
        expect(error.message).to.equal("No se ha podido eliminar el usuario");
      }
    });

    it("lanza error si el ID es inválido", async () => {
      try {
        await service.deleteUserById("id-invalido");
      } catch (error) {
        expect(error.message).to.equal("ID de usuario inválido");
      }
    });
  });

  // -------------------------------
  // updateUserById
  // -------------------------------
  describe("updateUserById", () => {
    it("actualiza un usuario exitosamente", async () => {
      const user = await User.create({
        username: "Original",
        email: "original@test.com",
        password: "Password.1",
      });

      const updated = await service.updateUserById(user._id, {
        username: "Actualizado",
      });
      expect(updated).to.have.property("username", "Actualizado");
    });

    it("lanza error si el usuario no existe", async () => {
      try {
        await service.updateUserById(new mongoose.Types.ObjectId(), {
          username: "NoExistente",
        });
      } catch (error) {
        expect(error.message).to.equal("No se ha podido actualizar el usuario");
      }
    });

    it("lanza error si el ID es inválido", async () => {
      try {
        await service.updateUserById("id-invalido", {});
      } catch (error) {
        expect(error.message).to.equal("ID de usuario inválido");
      }
    });
  });

  // -------------------------------
  // getUserById
  // -------------------------------
  describe("getUserById", () => {
    it("retorna un usuario por ID", async () => {
      const user = await User.create({
        username: "Buscar",
        email: "buscar@test.com",
        password: "Password.1",
      });

      const found = await service.getUserById(user._id);
      expect(found).to.have.property("_id").deep.equal(user._id);
    });

    it("lanza error si el usuario no existe", async () => {
      try {
        await service.getUserById(new mongoose.Types.ObjectId());
      } catch (error) {
        expect(error.message).to.equal("No se ha encontrado el usuario");
      }
    });

    it("lanza error si el ID es inválido", async () => {
      try {
        await service.getUserById("id-invalido");
      } catch (error) {
        expect(error.message).to.equal("ID de usuario inválido");
      }
    });
  });

  // -------------------------------
  // Autenticación
  // -------------------------------
  it("autentica usuario exitosamente", async () => {
    await User.create({
      username: "AuthUser",
      email: "auth@test.com",
      password: await bcrypt.hash("Panda.123", 10),
    });

    const auth = await service.authUser("auth@test.com", "Panda.123");
    expect(auth).to.have.property("email", "auth@test.com");
  });

  it("lanza error si el usuario no existe", async () => {
    try {
      await service.authUser("noexiste@test.com", "password");
    } catch (error) {
      expect(error.message).to.equal("Credenciales incorrectas");
    }
  });

  // -------------------------------
  // Parte contacts y events
  // -------------------------------
// Nuevo describe para funciones adicionales
describe("Funciones Adicionales", () => {
  let user;
  const contact = { _id: new mongoose.Types.ObjectId() };
  const event = { _id: new mongoose.Types.ObjectId() };

  beforeEach(async () => {
    user = await User.create({
      username: "TestUser",
      email: "test@user.com",
      password: await bcrypt.hash("Panda.123", 10)
    });
  });

  // Pruebas para saveUserContact
  describe("saveUserContact", () => {
    it("agrega contacto exitosamente", async () => {
      const result = await service.saveUserContact(user, contact);
      expect(result.contacts).to.include(contact._id);
    });

    it("lanza error al fallar el guardado", async () => {
      const invalidUser = { save: () => null };
      try {
        await service.saveUserContact(invalidUser, contact);
      } catch (error) {
        expect(error.message).to.equal("No se ha podido vincular el contacto al usuario");
      }
    });
  });

  // Pruebas para saveUserEvent
  describe("saveUserEvent", () => {
    it("agrega evento exitosamente", async () => {
      const result = await service.saveUserEvent(user, event);
      expect(result.events).to.include(event._id);
    });

    it("lanza error al fallar el guardado", async () => {
      const invalidUser = { save: () => null };
      try {
        await service.saveUserEvent(invalidUser, event);
      } catch (error) {
        expect(error.message).to.equal("No se ha podido vincular el evento al usuario");
      }
    });
  });

  // Pruebas para isPasswordValid
  describe("isPasswordValid", () => {
    it("valida contraseña correcta", async () => {
      const isValid = await service.isPasswordValid("Panda.123", user.password);
      expect(isValid).to.be.true;
    });

    it("valida contraseña incorrecta", async () => {
      const isValid = await service.isPasswordValid("WrongPass", user.password);
      expect(isValid).to.be.false;
    });
  });
});

});

