import models from "../data/models.js";
import { Errors, Validator } from "common";
import checkDailyCapacity from "../utils/bookingCapacity.js";

const { User, Booking } = models;

export default (userId, { dogs, startDate, endDate }) => {
  Validator.id(userId);
  if (!Array.isArray(dogs)) {
    throw new Errors.BookingNotValidError("DogId must be an array");
  }
  dogs.forEach((dogId) => Validator.id(dogId));
  Validator.startDate(startDate);
  Validator.endDate(endDate);

  if (new Date(startDate) >= new Date(endDate)) {
    throw new Errors.BookingNotValidError("startDate must be before endDate");
  }

  // 1. PARTE 1 --- ESQUEMA USUARIO ---
  return User.findById(userId).then((user) => {
    if (!user) throw new Errors.NotFoundError("User not found");

    const userDogs = user.dogs.map((dog) => dog._id.toString());
    const invalidDogs = dogs.filter((dogId) => !userDogs.includes(dogId));
    if (invalidDogs.length > 0) {
      throw new Errors.CredentialsError("One or more dogs not found");
    }

    // 2. PARTE 2 --- ESQUEMA BOOKING ---
    return Booking.find({
      owner: userId,
      startDate: { $lte: endDate },
      endDate: { $gte: startDate },
    }).then((reservations) => {
      // Verificamos el aforo antes de cualquier modificación
      checkDailyCapacity(reservations, dogs, startDate, endDate);

      // Comprobamos si existe una reserva para el usuario y las fechas
      const existingReservation = reservations.find(
        (reservation) =>
          reservation.owner.toString() === userId &&
          reservation.startDate.getTime() === new Date(startDate).getTime() &&
          reservation.endDate.getTime() === new Date(endDate).getTime()
      );

      if (existingReservation) {
        // Comprobamos si el perro ya está en la reserva
        const existingDogs = existingReservation.dogs.map((dog) =>
          dog.toString()
        );
        const newDogs = dogs.filter((dogId) => !existingDogs.includes(dogId));

        if (newDogs.length > 0) {
          // Agregamos los nuevos perros a la reserva existente
          existingReservation.dogs.push(
            ...newDogs.map((dogId) => ({ _id: dogId }))
          );
          return existingReservation.save();
        } else {
          // El perro ya está en la reserva, no hacemos nada
          return existingReservation;
        }
      } else {
        // Creamos una nueva reserva
        return Booking.create({
          owner: userId,
          dogs: dogs,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
        });
      }
    });
  });
};
