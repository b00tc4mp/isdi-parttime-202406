import models from "../data/models.js";
import { Errors, Validator } from "common";

const { Booking } = models;

export default (userId, bookingId, dogId) => {
  Validator.id(userId);
  Validator.id(bookingId);
  Validator.id(dogId); //Validamos que dogId es un Id valido

  return Booking.findById(bookingId)
    .then((booking) => {
      if (!booking) {
        throw new Errors.ExistenceError("Booking not found");
      }

      if (booking.owner.toString() !== userId) {
        throw new Errors.ExistenceError(
          "Booking associated to this user not found"
        );
      }

      if (!booking.dogs.some((dog) => dog.toString() === dogId)) {
        throw new Errors.ExistenceError("Dog not found in booking");
      }

      const updatedDogs = booking.dogs.filter(
        (dog) => dog.toString() !== dogId
      );

      return Booking.findOneAndUpdate(
        { _id: bookingId },
        { dogs: updatedDogs },
        { new: true }
      );
    })
    .catch((error) => {
      throw error;
    });
};
