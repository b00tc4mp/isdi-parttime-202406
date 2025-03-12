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
      expect(booking.startDate).to.deep.equal(new Date("2025-03-20")); // Comparar objetos Date
      expect(booking.endDate).to.deep.equal(new Date("2025-03-25"));
    });
  });

  it("Creates a booking successfully with a new dow in the same dates", async () => {
    await createBooking(userId, {
      dogs: [dogId],
      startDate: new Date("2025-08-01"),
      endDate: new Date("2025-08-07"),
    });

    const newDog = await Dog.create({
      dogName: "NewDog",
      chip: "987654321098766",
      breed: "Poodle",
      birthDate: new Date("2021-01-01"),
      sociability: true,
      disease: "none",
      allergy: "none",
      owner: userId,
    });
    const newDogId = newDog._id.toString();

    await User.findByIdAndUpdate(
      userId,
      { $push: { dogs: newDogId } },
      { new: true }
    );

    const updatedBooking = await createBooking(userId, {
      dogs: [newDogId],
      startDate: "2025-08-01",
      endDate: "2025-08-07",
    });

    expect(updatedBooking.dogs.map((dog) => dog.toString())).to.include(
      newDogId
    );
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

  it("Fails when the selected dog is already booked in some of these dates", () => {
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

  // async-await porque es un error de validador
  it("Fails when dogs is not an array", async () => {
    const invalidBooking = {
      dogs: "not-an-array",
      startDate: "2025-06-01",
      endDate: "2025-06-07",
    };

    try {
      await createBooking(userId, invalidBooking);
      throw new Error("Test should fail");
    } catch (error) {
      expect(error.message).to.equal("DogId must be an array");
    }
  });

  it("Throws an error if startDate is after endDate", async () => {
    const invalidBooking = {
      owner: userId,
      dogs: [dogId],
      startDate: "2025-01-31",
      endDate: "2025-01-01",
    };

    try {
      await createBooking(userId, invalidBooking);
      throw new Error("Test should fail");
    } catch (error) {
      expect(error.message).to.equal("startDate must be before endDate");
    }
  });

  it("Fails when the selected dog is already booked in overlapping dates", async () => {
    // Crear una reserva existente para el perro1
    const createdBooking = await Booking.create({
      owner: userId,
      dogs: [dogId],
      startDate: new Date("2025-04-01"),
      endDate: new Date("2025-04-03"),
    });

    // Intentar crear una nueva reserva para el mismo perro con fechas superpuestas
    try {
      await createBooking(userId, {
        dogs: [dogId],
        startDate: "2025-04-03",
        endDate: "2025-04-05",
      });

      throw new Error("Test should have failed due to overlapping dates");
    } catch (error) {
      expect(error.message).to.equal(
        "Este perro ya tiene reservas para uno de los días indicados. Accede a la pestaña 'mis reservas'."
      );
    }
  });

  it("Fails when trying to book the same dog for the exact same dates", async () => {
    // 1. Crear una reserva existente con el perro
    await Booking.create({
      owner: userId,
      dogs: [dogId],
      startDate: new Date("2025-10-01"),
      endDate: new Date("2025-10-07"),
    });

    // 2. Intentar reservar el mismo perro para las mismas fechas exactas
    try {
      await createBooking(userId, {
        dogs: [dogId],
        startDate: "2025-10-01",
        endDate: "2025-10-07",
      });
      throw new Error("Test should have failed");
    } catch (error) {
      expect(error.message).to.equal(
        "Este perro ya tiene reservas para uno de los días indicados. Accede a la pestaña 'mis reservas'."
      );
    }
  });
});
