import "dotenv/config";
import deleteBooking from "../deleteBooking.js";
import { afterEach, describe, it, beforeEach } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";

const { Booking } = models;

describe("Delete booking logic", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  let bookingId;
  let ownerId = new mongoose.Types.ObjectId().toString();
  let dogId = new mongoose.Types.ObjectId().toString();

  beforeEach(() => {
    return Booking.create({
      owner: ownerId,
      dogs: [dogId],
      startDate: new Date(Date.UTC(2025, 2, 20)),
      endDate: new Date(Date.UTC(2025, 2, 20)),
    }).then((bookingCreated) => {
      bookingId = bookingCreated._id.toString();
    });
  });

  afterEach(() => {
    Booking.deleteMany();
  });

  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  ////////////////////////////// HAPPY PATH //////////////////////////////

  it("Deletes a bookig successfully", () => {
    return deleteBooking(ownerId, bookingId, dogId).then((deletedBooking) => {
      // dogId como string
      expect(deletedBooking).to.exist;
      expect(deletedBooking._id.toString()).to.equal(bookingId);
      expect(deletedBooking.owner.toString()).to.equal(ownerId);
      expect(deletedBooking.dogs).to.deep.equal([]); // Ahora dogs debe ser un array vacio
    });
  });

  ////////////////////////////// UNHAPPY PATH //////////////////////////////

  it("Throws an error if ownerId does not exist", () => {
    let newOwnerId = new mongoose.Types.ObjectId().toString();
    return deleteBooking(newOwnerId, bookingId, dogId)
      .then(() => {
        throw new Error(
          "Test should have thrown an error for non-existent ownerId"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal(
          "Booking associated to this user not found"
        );
      });
  });

  it("Throws an error if bookingId does not exist", () => {
    let nonExistentBookingId = new mongoose.Types.ObjectId().toString();
    return deleteBooking(ownerId, nonExistentBookingId, dogId)
      .then(() => {
        throw new Error(
          "Test should have thrown an error for non-existent bookingId"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal("Booking not found");
      });
  });

  it("Throws an error if dogId does not match the booking's dogId", () => {
    let wrongDogId = new mongoose.Types.ObjectId().toString();
    return deleteBooking(ownerId, bookingId, wrongDogId)
      .then(() => {
        throw new Error("Test should have thrown an error for wrong dogId");
      })
      .catch((error) => {
        expect(error.message).to.equal("Dog not found in booking");
      });
  });
});
