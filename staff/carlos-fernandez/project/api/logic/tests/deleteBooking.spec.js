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
  let userId = new mongoose.Types.ObjectId().toString();
  let dogId = new mongoose.Types.ObjectId().toString();

  beforeEach(() => {
    return Booking.create({
      owner: userId,
      dogs: [dogId],
      startDate: "2025-02-18",
      endDate: "2025-02-20",
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
    return deleteBooking(userId, { bookingId }).then((deletedBooking) => {
      expect(deletedBooking).to.exist;
      expect(deletedBooking._id.toString()).to.equal(bookingId);
      expect(deletedBooking.owner.toString()).to.equal(userId);
    });
  });

  ////////////////////////////// UNHAPPY PATH //////////////////////////////

  it("Throws an error if ownerId does not exist", () => {
    let newUserId = new mongoose.Types.ObjectId().toString();
    return deleteBooking(newUserId, { bookingId })
      .then(() => {
        throw new Error(
          "Test should have thrown an error for non-existent ownerId"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal(
          "Booking or booking associated to this user not found"
        );
      });
  });

  it("Throws an error if bookingId does not exist", () => {
    let nonExistentBookingId = new mongoose.Types.ObjectId().toString();
    return deleteBooking(userId, { bookingId: nonExistentBookingId })
      .then(() => {
        throw new Error(
          "Test should have thrown an error for non-existent bookingId"
        );
      })
      .catch((error) => {
        expect(error.message).to.equal(
          "Booking or booking associated to this user not found"
        );
      });
  });

  it("Throws an error if bookingId is not a valid ObjectId", () => {
    expect(() => deleteBooking(userId, { bookingId: "invalid_id" })).to.throw(
      "Invalid ID format"
    );
  });
});
