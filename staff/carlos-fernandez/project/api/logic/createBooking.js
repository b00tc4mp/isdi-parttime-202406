import models from "../data/models.js";
import { Errors, Validator } from "common";

const { User, Booking } = models;

export default ({ userId, dogs, startDate, endDate }) => {
  Validator.id(userId);
  if (!Array.isArray(dogs)) {
    throw new Errors.BookingNotValidError("DogId must be an array");
  }
  dogs.forEach((dogId) => Validator.id(dogId));
  Validator.startDate(startDate);
  Validator.endDate(endDate);

  if (new Date(startDate) >= new Date(endDate)) {
    throw new Errors.BookingNotValidError("starDate must be before endDate");
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  return User.findById(userId).then((user) => {
    if (!user) throw new Errors.NotFoundError("User not found");

    const userDogs = user.dogs.map((dog) => dog._id.toString());

    // Verificamos que los perros que entran del front pertenecen al usuario
    const invalidDogs = dogs.filter((dogId) => !userDogs.includes(dogId));
    if (invalidDogs.length > 0) {
      throw new Errors.CredentialsError("One or more dogs not found");
    }

    // Buscamos todas las reservas entre esas fechas
    return Booking.find({
      startDate: { $lte: endDate },
      endDate: { $gte: startDate },
    }).then((reservations) => {
      let existingBooking = null;
      let dailyCount = {};

      reservations.forEach((booking) => {
        let current = new Date(booking.startDate);
        const bookingEnd = new Date(booking.endDate);

        while (current <= bookingEnd) {
          const dateKey = current.toISOString().split("T")[0];
          dailyCount[dateKey] =
            (dailyCount[dateKey] || 0) + booking.dogs.length;
          current.setDate(current.getDate() + 1);
        }

        // Buscamos si el usuario ya tiene una reserva en esas fechas
        if (
          booking.owner.toString() === userId.toString() &&
          !existingBooking
        ) {
          existingBooking = booking;
        }
      });

      // Si existe reserva previa del usuario, filtramos qué perros NO están en ella

      const newDogs = existingBooking
        ? dogs.filter(
            (dogId) =>
              !existingBooking.dogs
                .map((dog) => dog.toString())
                .includes(dogId.toString())
          )
        : dogs;

      if (existingBooking && newDogs.length === 0) {
        throw new Errors.BookingNotValidError(
          "Selected dogs are already booked in these dates"
        );
      }

      // Verificamos disponibilidad antes de crear o modificar una reserva

      let totalUserDogs = newDogs.length;
      let current = new Date(startDate);

      while (current <= endDate) {
        const dateKey = current.toISOString().split("T")[0];
        const bookedForDay = dailyCount[dateKey] || 0;

        if (bookedForDay + totalUserDogs > 50) {
          throw new Errors.LimitExceededError(
            `Booking limit exceeded on ${dateKey}`
          );
        }
        current.setDate(current.getDate() + 1);
      }

      // Si ya hay una reserva del usuario, actualizamos el array de perros
      if (existingBooking) {
        return Booking.findByIdAndUpdate(
          existingBooking._id,
          { $addToSet: { dogs: { $each: newDogs } } },
          { new: true }
        );
      }

      // Si NO hay reserva, creamos una nueva
      return Booking.create({
        owner: userId,
        dogs: dogs,
        startDate: startDate,
        endDate: endDate,
      });
    });
  });
};
