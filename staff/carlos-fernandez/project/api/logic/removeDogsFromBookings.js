import models from "../data/models.js";
import { Errors, Validator } from "common";

const { Booking } = models;

export default ({ bookingId, dogIds, userId }) => {
  Validator.id(bookingId);
  Validator.is(userId);

  if (dogIds && !Array.isArray(dogIds)) {
    throw new Errors.BookingNotValidError("dogIds must be an array");
  }

  return Booking.findById(bookingId).then((booking) => {
    if (!booking) throw new Errors.NotFoundError("Booking not found");

    if (booking.owner.toString() !== userId) {
      throw new Errors.CredentialsError(
        "User is not the owner of this booking"
      );
    }

    // Que exista dogIds y que además no sea array vacío
    if (dogIds && dogIds.length > 0) {
      // .filter() => itera sobre cada "dog" en booking.dogs
      // Para cada "dog" => se verifica si dogIds.includes(dog.toString()) es true
      // Si es true => "dog" está presente en dogIds, se quiere eliminar su reserva
      // Si es false => "dog" no está presente en dogIds, se incluye en noDeletingDogs (no se elimina para él)
      const noDeletingDogs = booking.dogs.filter(
        (dog) => !dogIds.includes(dog.toString())
      );

      // Si cada "dog" está en dogIds (perros que *SÍ* hay que eliminar la reserva)
      // Esto se sabe porque noDeletingDogs (perros que no se eliminan, está vacío)
      if (noDeletingDogs.length === 0) {
        return Booking.findByIdAndDelete(bookingId).then(() => booking);
        /* Si los que nos quedamos, son menos que el array original (es decir, hay alguno que se va a la resi)
             se actualiza el array de booking.dogs */
      } else if (noDeletingDogs.length < booking.dogs.length) {
        booking.dogs = noDeletingDogs;
        return booking.save().then(() => booking); //guardamos
      } else {
        return booking;
      }
    } else {
      //Si no se proporciona dogId, se elimia la reserva entera
      return Booking.findByIdAndDelete(bookingId).then(() => booking);
    }
  });
};
