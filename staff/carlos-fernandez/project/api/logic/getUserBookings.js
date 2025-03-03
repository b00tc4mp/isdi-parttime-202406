import { Validator, Errors } from "common";
import models from "../data/models.js";

const { User, Booking } = models;

export default (id) => {
  Validator.id(id);

  return Booking.find({ owner: id })
    .populate("dogs", "dogName")
    .populate("startDate")
    .populate("endDate")
    .lean()
    .then((bookings) => {
      if (!bookings) throw new Errors.NotFoundError("Bookings not found");
      return bookings;
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
