import "dotenv/config";
import { describe, it } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";
import getUserBookings from "../getUserBookings.js";

const { User, Dog, Booking } = models;

describe("Get bookings associated with a user", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() =>
    Booking.deleteMany().then(() =>
      User.deleteMany().then(() => Dog.deleteMany())
    )
  );
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  //////////////////// HAPPY PATH ////////////////////

  it("Returns a list of bookings if user has bookings", async () => {
    //creamos un usuario
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

    // Creamos un perro y lo asociamos al usuario
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
    savedUser.dogs.push(savedDog._id);
    await savedUser.save();

    // Creamos una reserva
    const booking = {
      owner: savedUser._id,
      dogs: [savedDog._id],
      startDate: new Date("2024-03-10"),
      endDate: new Date("2024-03-15"),
    };

    const savedBooking = await Booking.create(booking);

    //Obtenemos las reservas del usuario
    const userId = savedUser._id.toString();
    const bookings = await getUserBookings(userId);

    // Comprobaciones
    expect(bookings).to.be.an("array").that.is.not.empty;
    expect(bookings[0].dogs).to.be.an("array").that.is.not.empty; // Verifica que la propiedad dogs del primer elemento del array bookings no esté vacía
    expect(bookings[0].dogs[0].dogName).to.equal(savedDog.dogName);
  });

  //////////////////// UNHAPPY PATH ////////////////////
  it("Throws an error if id is not valid", async () => {
    const invalidUserId = "invalid_id";

    try {
      await getUserBookings(invalidUserId);
    } catch (error) {
      expect(error.message).to.equal("Invalid ID format");
    }
  });

  it("Throws an error if user doesn't exist", async () => {
    const nonExistentId = "6762d9a87e65a2d92c12836e";

    try {
      await getUserBookings(nonExistentId);
    } catch (error) {
      expect(error.message).to.equal("Bookings not found");
    }
  });

  it("Returns an empty array if user has no bookings", async () => {
    // Creamos un usuario sin reservas
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

    // Obtenemos las reservas del usuario
    const stringedId = savedUser._id.toString();
    const bookings = await getUserBookings(stringedId);

    // Comprobaciones
    expect(bookings).to.be.an("array").that.is.empty;
  });
});
