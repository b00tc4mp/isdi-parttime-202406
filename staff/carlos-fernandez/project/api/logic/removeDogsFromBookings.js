import models from "../data/models.js";
import { Errors, Validator } from "common";

const { Booking } = models;

export default ({ bookingId, userId, dogIds }) => {
  Validator.id(bookingId);
  Validator.id(userId);

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
      /* 
        .filter() => itera sobre cada "dog" en booking.dogs
         Compara el dogId que el usuario quiere eliminar con los que hay en la reserva.
         Los que no coinciden, por lo tanto no se quieren eliminar, se guardan en un array nuevo 
         llamado noDeletingDogs    
      */

      console.log("DOG IDS--------", dogIds);
      const noDeletingDogs = booking.dogs.filter(
        (dog) => !dogIds.includes(dog.toString())
      );

      /* Si no hay ninguno que no se quiera eliminar (todos se quieren eliminar): */
      if (noDeletingDogs.length === 0) {
        return Booking.findByIdAndDelete(bookingId).then(() => booking);
      } else if (noDeletingDogs.length < booking.dogs.length) {
        /* 
          Actualizamos el array de perros con reserva.
          Sobreescribimos los que tienen reserva y le asignamos el array de los que no se quieren eliminar, 
          ya que en ese array hemos excluido al que *SÍ* se quiere eliminar 
        */
        booking.dogs = noDeletingDogs;
        return booking.save().then(() => booking); //guardamos
      } else {
        return booking;
      }
    }
  });
};
