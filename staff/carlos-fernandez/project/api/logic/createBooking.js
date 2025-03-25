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

  if (new Date(startDate) >= new Date(endDate)) {
    throw new Errors.BookingNotValidError("startDate must be before endDate");
  }
  Validator.startDate(startDate);
  Validator.endDate(endDate);

  // 1. PARTE 1 --- ESQUEMA USUARIO ---
  return User.findById(userId).then((user) => {
    if (!user) throw new Errors.NotFoundError("User not found");

    const userDogs = user.dogs.map((dog) => dog._id.toString()); //Lista con los id de los perros del user
    const invalidDogs = dogs.filter((dogId) => !userDogs.includes(dogId)); // Que los perros coincidan con los del usuario
    if (invalidDogs.length > 0) {
      throw new Errors.CredentialsError("One or more dogs not found");
    }

    // 2. PARTE 2 --- ESQUEMA BOOKING ---

    //Buscar entre ALGUNAS de esas fechas
    return Booking.find({
      owner: userId,
      startDate: { $lte: endDate },
      endDate: { $gte: startDate },
    }).then((reservations) => {
      checkDailyCapacity(reservations, dogs, startDate, endDate);

      // Comprobar si el perro que se quiere reservar ya tiene reserva en alguna de las reservas existentes
      for (const dogId of dogs) {
        for (const reservation of reservations) {
          if (reservation.dogs.some((dog) => dog.toString() === dogId)) {
            throw new Errors.BookingNotValidError(
              "Este perro ya tiene reservas para uno de los días indicados. Accede a la pestaña 'mis reservas'."
            );
          }
        }
      }

      // Buscar EXACTAMENTE con estas fechas
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

        //Si hay perros nuevos que no están en la reserva
        if (newDogs.length > 0) {
          // Agregamos los nuevos perros a la reserva existente
          existingReservation.dogs.push(
            ...newDogs.map((dogId) => ({ _id: dogId }))
          );
          return existingReservation.save();
        } else {
          // El perro ya está en la reserva, lanzamos el error
          throw new Errors.BookingNotValidError(
            "Este perro ya tiene reservas para uno de los días indicados. Accede a la pestaña 'mis reservas'."
          );
        }
      } else {
        // Si no hay reserva igual, creamos una nueva reserva
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
