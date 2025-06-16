import { expect } from "chai";
import getUserById from "../getAllUsers.js"; // Ajusta el path según tu proyecto
import { Errors } from "social-common";
import { ObjectId } from "mongodb";

// Mock de la base de datos
const mockData = {
  users: {
    findOne: ({ _id }) => {
      const validId = new ObjectId("validObjectIdHere");
      if (_id.equals(validId)) {
        return Promise.resolve({
          username: "JohnDoe",
          dateOfBirth: "01-01-2000",
        });
      }
      return Promise.resolve(null);
    },
  },
};

// Mockear el módulo `data/index.js`
import * as dataModule from "../data/index.js";
dataModule.default = mockData;

describe("getAllUsers", () => {
  it("debe retornar el usuario correcto si el ID es válido", async () => {
    const id = "validObjectIdHere";
    const result = await getUserById(id);
    expect(result).to.deep.equal({
      username: "JohnDoe",
      dateOfBirth: "01-01-2000",
    });
  });

  it("debe lanzar un error si el usuario no existe", async () => {
    const id = "nonExistentId";
    try {
      await getUserById(id);
      throw new Error("No se lanzó el error esperado");
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.ExistenceError);
      expect(error.message).to.equal("User does not exist");
    }
  });

  it("debe lanzar un error si el ID no es válido", async () => {
    const id = "invalidId";
    try {
      await getUserById(id);
      throw new Error("No se lanzó el error esperado");
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.ExistenceError);
      expect(error.message).to.equal("Invalid User ID");
    }
  });
});
