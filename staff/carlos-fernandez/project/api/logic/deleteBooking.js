import models from "../data/models.js";
import { Errors, Validator } from "common";

const { Booking } = models;

export default ({ bookingId, userId }) => {
  Validator.id(bookingId);
  Validator.id(userId);

  return Booking.findOneAndDelete({ _id: bookingId, owner: userId }).then(
    (deletedBooking) => {
      if (!deletedBooking) {
        throw new Errors.NotFoundError(
          "Booking or booking associated to this user not found"
        );
      }
      return deletedBooking;
    }
  );
};
