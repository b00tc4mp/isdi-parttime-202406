import "dotenv/config";
import registerPet from "../registerPet.js";
import { describe, it } from "mocha";
import models from "../../data/models.js";
import mongoose, { Types } from "mongoose";
import { expect } from "chai";

const { User, Dog } = models;
const { ObjectId } = Types;

describe("Register dog", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  let userId;

  beforeEach(() => {
    // Crear un usuario de prueba antes de cada test
    return User.create({
      username: "testuser",
      surname: "testsurname",
      phoneNumber: "123456789",
      nif: "12345678X",
      email: "test@example.com",
      password: "password123",
    }).then((user) => {
      userId = user._id;
    });
  });

  afterEach((done) => {
    Dog.deleteMany()
      .then(() => User.deleteMany()) // Limpiar usuarios de prueba
      .then(() => done())
      .catch(done);
  });
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  ////////////////////////////// HAPPY PATH //////////////////////////////

  it("Creates a new dog associated to its owner", () => {
    const dogData = {
      chip: "123456789012345",
      dogName: "Django",
      breed: "Border collie",
      birthDate: new Date("2013-08-21"),
      sociability: true,
      disease: "none",
      allergy: "none",
    };
    return registerPet(userId, dogData).then(() => {
      Dog.findOne({
        chip: "123456789012345",
      }).then((dog) => {
        expect(dog.dogName).to.equal("Django");
        expect(dog.breed).to.equal("Border collie");
        // Compara solo la fecha sin tiempo
        expect(dog.birthDate.toISOString().split("T")[0]).to.equal(
          "2013-08-21"
        );
        expect(dog.sociability).to.equal(true);
        expect(dog.disease).to.equal("none");
        expect(dog.allergy).to.equal("none");
      });
    });
  });

  ////////////////////////////// UNHAPPY PATH //////////////////////////////

  it("Fails when a dog with the same chip already exists", () => {
    const chip = "987654321012345";
    return Dog.create({
      chip: chip,
      dogName: "Max",
      breed: "Golden Retriever",
      birthDate: new Date("2020-01-01"),
      sociability: true,
      disease: "None",
      allergy: "None",
      owner: userId,
    }).then(() => {
      const dogData = {
        chip: chip,
        dogName: "Max",
        breed: "Poodle",
        birthDate: new Date("2020-01-01"),
        sociability: false,
        disease: "Displasia",
        allergy: "Chicken",
      };
      return registerPet(userId, dogData)
        .then(() => {
          throw new Error(
            "Test should have thrown an error for duplicate dog chip"
          );
        })
        .catch((error) => {
          expect(error.message).to.equal(
            "A dog with the same chip already exists"
          );
        });
    });
  });

  it("Fails when birthDate is not a valid date", () => {
    const dogData = {
      chip: "123456789012345",
      dogName: "Django",
      breed: "Border collie",
      birthDate: "invalid-date",
      sociability: true,
      disease: "none",
      allergy: "none",
    };

    return registerPet(userId, dogData)
      .then(() => {
        throw new Error(
          "Test should have thrown an error for invalid birthDate"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal("Birth date is not a valid date");
      });
  });

  it("Fails when dogName is empty", () => {
    const dogData = {
      chip: "123456789012345",
      dogName: "",
      breed: "Border collie",
      birthDate: "invalid-date",
      sociability: true,
      disease: "none",
      allergy: "none",
    };

    return registerPet(userId, dogData)
      .then(() => {
        throw new Error("Test should have thrown an error for empty dogName");
      })
      .catch((error) => {
        expect(error.message).to.equal("Dog's name is empty");
      });
  });
});
