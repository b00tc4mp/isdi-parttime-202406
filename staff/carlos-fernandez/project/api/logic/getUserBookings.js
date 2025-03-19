import { Validator, Errors } from "common";
import models from "../data/models.js";

const { Booking } = models;

export default (id) => {
  Validator.id(id);

  return Booking.find({ owner: id })
    .populate("dogs")
    .lean()
    .then((bookings) => {
      if (!bookings || bookings.length === 0) return [];

      return bookings.map((booking) => ({
        id: booking._id.toString(), //id sin "_"
        owner: booking.owner,
        startDate: booking.startDate,
        endDate: booking.endDate,
        dogs: booking.dogs.map((dog) => ({
          id: dog._id.toString(),
          ...dog,
          _id: undefined,
          __v: undefined,
        })),
        _id: undefined,
        __v: undefined,
      }));
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
