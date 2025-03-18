import { Validator, Errors } from "common";
import models from "../data/models.js";

const { Booking } = models;

export default (id) => {
  Validator.id(id);

  return Booking.find({ owner: id })
    .populate({
      path: "dogs",
      select: "-_id -__v",
    })
    .select("-_id -__v")
    .lean()
    .then((bookings) => {
      if (!bookings || bookings.length === 0) return [];
      return bookings;
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
