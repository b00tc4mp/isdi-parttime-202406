import "dotenv/config";
import { describe, it } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";
import getUserDogs from "../getUserDogs.js";

const { User, Dog } = models;

describe("Get dogs associated to a user", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  //////////////////// HAPPY PATH ////////////////////

  it("Returns a list of dogs if user has registered dogs", async () => {
    // Creamos un usuario sin perros asociados
    const user = {
      username: "Carlos",
      surname: "Fernandez",
      phoneNumber: "666014587",
      nif: "38214569T",
      email: "carlsos@gmail.com",
      password: "hashedpassword",
      dogs: [],
    };

    const savedUser = await User.create(user);

    // Creamos un perro
    const dog = {
      chip: "102546893210747",
      dogName: "Django",
      breed: "Border Collie",
      birthDate: new Date("2013-08-21"),
      sociability: true,
      disease: "none",
      allergy: "none",
      owner: savedUser._id,
    };

    const savedDog = await Dog.create(dog);

    //Asociamos el perro al usuario
    savedUser.dogs.push(savedDog._id);
    await savedUser.save();

    //Pasamos el id del usuario creado a string para poder pasarlo como prop a getUserDogs()
    const stringedId = savedUser._id.toString();
    const dogs = await getUserDogs(stringedId);

    //Comprobaciones
    expect(dogs).to.be.an("array").that.is.not.empty;
    expect(dogs[0].dogName).to.equal(savedDog.dogName);
  });

  //////////////////// UNHAPPY PATH ////////////////////
  it("Throws an error if id is not valid", async () => {
    const invalidUserId = "invalid_id";

    try {
      await getUserDogs(invalidUserId);
    } catch (error) {
      expect(error.message).to.equal("Invalid ID format");
    }
  });

  it("Throws an error if user it doesn't exist", async () => {
    const existentId = "6762d9a87e65a2d92c12836e";
    try {
      await getUserDogs(existentId);
    } catch (error) {
      expect(error.message).to.equal("User not found");
    }
  });

  it("Returns an empty array if user has no dogs", async () => {
    const user = {
      username: "Carlos",
      surname: "Fernandez",
      phoneNumber: "666014587",
      nif: "38214569T",
      email: "carlsos@gmail.com",
      password: "hashedpassword",
      dogs: [],
    };

    const createdUser = await User.create(user);
    const dogs = await getUserDogs(createdUser._id.toString());

    expect(dogs).to.be.an("array").that.is.empty;
  });
});
