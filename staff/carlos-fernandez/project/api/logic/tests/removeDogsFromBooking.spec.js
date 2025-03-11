import "dotenv/config";
import removeDogsFromBookings from "../removeDogsFromBookings.js";
import { afterEach, describe, it, beforeEach } from "mocha";
import models from "../../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";

const { Booking } = models;

describe("Delete some dogs from booking logic", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  let bookingId;
  let userId = new mongoose.Types.ObjectId().toString();
  let dogId1 = new mongoose.Types.ObjectId().toString();
  let dogId2 = new mongoose.Types.ObjectId().toString();

  beforeEach(() => {
    return Booking.create({
      owner: userId,
      dogs: [dogId1, dogId2],
      startDate: new Date(Date.UTC(2025, 2, 20)),
      endDate: new Date(Date.UTC(2025, 2, 20)),
    }).then((bookingCreated) => {
      bookingId = bookingCreated._id.toString();
    });
  });

  afterEach(() => {
    return Booking.deleteMany();
  });

  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  ////////////////////////////// HAPPY PATH //////////////////////////////

  it("Deletes dogId1 from booking successfully", () => {
    return removeDogsFromBookings(userId, { bookingId, dogIds: [dogId1] }).then(
      (deletedBooking) => {
        expect(deletedBooking).to.exist;
        expect(deletedBooking._id.toString()).to.equal(bookingId);
        expect(deletedBooking.dogs.toString()).to.equal(dogId2);
      }
    );
  });

  ////////////////////////////// UNHAPPY PATH //////////////////////////////
  it("Throws an error if userId does not exist", () => {
    let newUserId = new mongoose.Types.ObjectId().toString();
    return removeDogsFromBookings(newUserId, {
      bookingId,

      dogIds: [dogId1],
    })
      .then(() => {
        throw new Error(
          "Test should have thrown an error for non-existent ownerId"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal("User is not the owner of this booking");
      });
  });

  it("Throws an error if bookingId does not exist", () => {
    let nonExistentBookingId = new mongoose.Types.ObjectId().toString();
    return removeDogsFromBookings(userId, {
      bookingId: nonExistentBookingId,

      dogIds: [dogId1],
    })
      .then(() => {
        throw new Error(
          "Test should have thrown an error for non-existent bookingId"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal("Booking not found");
      });
  });

  it("Throws an error if bookingId is not a valid ObjectId", () => {
    expect(() =>
      removeDogsFromBookings(userId, {
        bookingId: "invalid_id",

        dogIds: [dogId1],
      })
    ).to.throw("Invalid ID format");
  });
});
