import "dotenv/config";
import deleteDog from "../deleteDog.js";
import models from "../../data/models.js";
import mongoose, { Types } from "mongoose";
import { expect } from "chai";

const { User, Dog } = models;

describe("Delete Dog Logic", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  let userId;

  beforeEach(async () => {
    // Crear un usuario de prueba antes de cada test
    const user = await User.create({
      username: "testuser",
      surname: "testsurname",
      phoneNumber: "123456789",
      nif: "12345678X",
      email: "test@example.com",
      password: "password123",
    });
    userId = user._id.toString();

    // Crear una mascota asociada al usuario
    await Dog.create({
      chip: "123456789012345",
      dogName: "Django",
      breed: "Border collie",
      birthDate: new Date("2013-08-21"),
      sociability: true,
      disease: "none",
      allergy: "none",
      owner: userId,
    });
  });

  afterEach(async () => {
    await Dog.deleteMany();
    await User.deleteMany();
  });

  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  ////////////////////////////////////////// HAPPY PATH //////////////////////////////////////////
  it("should successfully delete a dog and remove it from the user's dogs array", async () => {
    const dog = await Dog.findOne({ owner: userId });

    const petId = dog._id.toString();

    const deletedDog = await deleteDog(petId, userId);

    expect(deletedDog).to.be.an("object");
    expect(deletedDog._id).to.exist; // Ahora se accede a _id después de la verificación de que deletedDog es un objeto

    const updatedUser = await User.findById(userId);
    expect(updatedUser.dogs).to.be.empty;

    const deletedDogInDB = await Dog.findById(petId);
    expect(deletedDogInDB).to.be.null;
  });
});
