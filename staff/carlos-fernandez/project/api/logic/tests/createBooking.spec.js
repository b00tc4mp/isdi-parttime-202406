import "dotenv/config";
import createBooking from "../createBooking.js";
import { afterEach, describe, it } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";

const { User, Dog, Booking } = models;

describe("Create booking", () => {
  let userId, dogId;

  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  beforeEach(() => {
    return User.create({
      username: "testuser",
      surname: "testsurname",
      phoneNumber: "123456789",
      nif: "12345678X",
      email: "test@example.com",
      password: "password123",
    }).then((createdUser) => {
      userId = createdUser._id.toString();

      return Dog.create({
        dogName: "Buddy",
        chip: "123456789012345",
        breed: "Labrador",
        birthDate: new Date("2020-01-01"),
        sociability: true,
        disease: "none",
        allergy: "none",
        owner: userId,
      }).then((createdDog) => {
        dogId = createdDog._id.toString();

        return User.findByIdAndUpdate(
          userId,
          { $push: { dogs: dogId } },
          { new: true }
        );
      });
    });
  });

  afterEach(() =>
    Booking.deleteMany()
      .then(() => User.deleteMany())
      .then(() => Dog.deleteMany())
  );
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  ////////////////////////////// HAPPY PATH //////////////////////////////

  it("Creates a booking successfully", () => {
    const bookingData = {
      userId: userId,
      dogs: [dogId],
      startDate: new Date(Date.UTC(2025, 2, 20)), //Los meses empiezan en 0 (enero=0, febrero=1...)
      endDate: new Date(Date.UTC(2025, 2, 25)),
    };

    return createBooking(bookingData).then((booking) => {
      expect(booking.owner.toString()).to.equal(userId);
      expect(booking.dogs[0].toString()).to.equal(dogId);
      expect(booking.startDate.toISOString().split("T")[0]).to.equal(
        "2025-03-20"
      );
      expect(booking.endDate.toISOString().split("T")[0]).to.equal(
        "2025-03-25"
      );
    });
  });

  ////////////////////////////// UNHAPPY PATHS //////////////////////////////
  it("Fails when user does not exist", () => {
    const bookingData = {
      userId: new mongoose.Types.ObjectId().toString(),
      dogs: [dogId],
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-05-07"),
    };

    return createBooking(bookingData)
      .then(() => {
        throw new Error(
          "Test should have thrown an error for non-existent user"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal("User not found");
      });
  });

  it("Fails when one of the dogs does not exist", () => {
    const bookingData = {
      userId: userId,
      dogs: [new mongoose.Types.ObjectId().toString()],
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-05-07"),
    };

    return createBooking(bookingData)
      .then(() => {
        throw new Error(
          "Test should have thrown an error for non-existent dog"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal("One or more dogs not found");
      });
  });

  it("Fails when the booking limit is exceeded", () => {
    const bookingData = {
      userId: userId,
      dogs: [dogId],
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-05-07"),
    };

    // Simular que ya existen 50 reservas para la misma fecha
    const bookings = Array.from({ length: 50 }, () => ({
      owner: new mongoose.Types.ObjectId(), // usuarios distintos
      dogs: [new mongoose.Types.ObjectId()], // Perros distintos
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-05-07"),
    }));

    return Booking.insertMany(bookings).then(() => {
      return Booking.find()
        .then(() => {
          return createBooking(bookingData);
        })
        .then(() => {
          throw new Error(
            "Test should have thrown an error for dos already booked in these dates"
          );
        })
        .catch((error) => {
          expect(error.message).to.equal(
            `Booking limit exceeded on 2025-05-01`
          );
        });
    });
  });

  it("Fails when the selected dog is already booked in these dates", () => {
    const existingBooking = {
      owner: userId,
      dogs: [dogId],
      startDate: new Date("2025-06-01"),
      endDate: new Date("2025-06-07"),
    };

    return Booking.create(existingBooking)
      .then(() => {
        const newBooking = {
          userId: userId,
          dogs: [dogId], // Mismo perro que en la reserva anterior
          startDate: new Date("2025-06-01"), // Mismas fechas
          endDate: new Date("2025-06-07"),
        };

        return createBooking(newBooking);
      })
      .then(() => {
        throw new Error(
          "Test should have thrown an error for already booked dog"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal(
          "Selected dogs are already booked in these dates"
        );
      });
  });
});
