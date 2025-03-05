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

  // ////////////////////////////// HAPPY PATH //////////////////////////////

  it("Creates a booking successfully", () => {
    const bookingData = {
      dogs: [dogId],
      startDate: "2025-03-20",
      endDate: "2025-03-25",
    };

    return createBooking(userId, bookingData).then((booking) => {
      expect(booking.owner.toString()).to.equal(userId);
      expect(booking.dogs[0].toString()).to.equal(dogId);
      expect(booking.startDate).to.equal("20/3/2025");
      expect(booking.endDate).to.equal("25/3/2025");
    });
  });

  // ////////////////////////////// UNHAPPY PATHS //////////////////////////////

  it("Fails when user does not exist", () => {
    let newUserId = new mongoose.Types.ObjectId().toString();

    const bookingData = {
      dogs: [dogId],
      startDate: "2025-05-01",
      endDate: "2025-05-07",
    };

    return createBooking(newUserId, bookingData)
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
      dogs: [new mongoose.Types.ObjectId().toString()],
      startDate: "2025-05-01",
      endDate: "2025-05-07",
    };

    return createBooking(userId, bookingData)
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
      dogs: [dogId],
      startDate: "2025-05-01",
      endDate: "2025-05-07",
    };

    const bookings = Array.from({ length: 50 }, () => ({
      owner: new mongoose.Types.ObjectId(),
      dogs: [new mongoose.Types.ObjectId()],
      startDate: "2025-05-01",
      endDate: "2025-05-07",
    }));

    return Booking.insertMany(bookings)
      .then(() => createBooking(userId, bookingData))
      .catch((error) => {
        expect(error.message).to.equal(
          "Las mascotas seleccionadas ya tienen reserva para estos dias"
        );
      });
  });

  it("Fails when the selected dog is already booked in these dates", () => {
    const existingBooking = {
      owner: userId,
      dogs: [dogId],
      startDate: "2025-06-01",
      endDate: "2025-06-07",
    };

    return Booking.create(existingBooking)
      .then(() => {
        const newBooking = {
          dogs: [dogId],
          startDate: "2025-06-01",
          endDate: "2025-06-07",
        };

        return createBooking(userId, newBooking);
      })

      .catch((error) => {
        expect(error.message).to.equal(
          "Este perro ya tiene reservas para uno de los días indicados. Accede a la pestaña 'mis reservas'."
        );
      });
  });
});
