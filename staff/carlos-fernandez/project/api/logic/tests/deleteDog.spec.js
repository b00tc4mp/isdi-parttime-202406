import "dotenv/config";
import deleteDog from "../deleteDog.js";
import models from "../../data/models.js";
import mongoose, { Types } from "mongoose";
import { expect } from "chai";
import { Errors } from "common";

const { User, Dog } = models;

describe("Delete Dog Logic", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  let userId;
  let dogId;

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
    const dog = await Dog.create({
      chip: "123456789012345",
      dogName: "Django",
      breed: "Border collie",
      birthDate: new Date("2013-08-21"),
      sociability: true,
      disease: "none",
      allergy: "none",
      owner: userId,
    });
    dogId = dog._id.toString();
  });
  afterEach(async () => {
    await Dog.deleteMany();
    await User.deleteMany();
  });

  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  ////////////////////////////////////////// HAPPY PATH //////////////////////////////////////////

  it("Should successfully delete a dog and remove it from the user's dogs array", async () => {
    const deletedDog = await deleteDog(dogId, userId);

    expect(deletedDog).to.be.undefined; // deleteDog doesn't return anything.

    const updatedUser = await User.findById(userId);
    expect(updatedUser.dogs).to.be.empty;

    const deletedDogInDB = await Dog.findById(dogId);
    expect(deletedDogInDB).to.be.null;
  });

  it("Should throw an ExistenceError if the user does not exist", () => {
    const nonExistentUserId = new Types.ObjectId().toString();

    return deleteDog(dogId, nonExistentUserId)
      .then(() => {
        throw new Error(
          "Test should have thrown an error for non-existent user"
        );
      })
      .catch((error) => {
        expect(error).to.be.an.instanceOf(Errors.ExistenceError);
        expect(error.message).to.equal("User not found");
      });
  });

  it("Should throw an ExistenceError if the dog does not exist or does not belong to the user", () => {
    const nonExistentDogId = new Types.ObjectId().toString();

    return deleteDog(nonExistentDogId, userId)
      .then(() => {
        throw new Error("Test should trhow an error for non-existent dog");
      })
      .catch((error) => {
        expect(error).to.be.an.instanceOf(Errors.ExistenceError);
        expect(error.message).to.equal("Dog not found");
      });
  });

  it("Should handle invalid petId or userId formats", async () => {
    try {
      await deleteDog("invalidPetId", userId);
      throw new Error("Test should throw an error for invalid petId");
    } catch (error) {
      expect(error).to.be.an.instanceOf(TypeError);
    }

    try {
      await deleteDog(dogId, "invalidUserId");
      throw new Error("Test should throw an error for invalid userId");
    } catch (error) {
      expect(error).to.be.an.instanceOf(TypeError);
    }
  });
});
