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

  //Buscamos al usuario en la bbdd
  return User.findById(userId).then((user) => {
    if (!user) throw new Errors.NotFoundError("User not found");

    // Buscamos los perros
    const userDogs = user.dogs.map((dog) => dog._id.toString());

    // Buscamos si en el array de perros del usuario, hay algun perro que coincida con el dogId que buscamos
    const invalidDogs = dogs.filter((dogId) => !userDogs.includes(dogId));
    if (invalidDogs.length > 0) {
      throw new Errors.CredentialsError("One or more dogs not found");
    }

    // 1. Buscamos TODAS las reservas cuyo rango de fecha SE SUPERPONGA a la nueva reserva
    return (
      Booking.find({
        // Reservas que empiecen ANTES o el MISMO dia que el fin de la nueva reserva
        startDate: { $lte: endDate },
        // Reservas que terminen DESPUES o el MISMO dia del inicio de la nueva reserva
        endDate: { $gte: startDate },
      })

        // 2. CONTAR RESERVAS DIARIAS
        .then((reservations) => {
          // Creamos un contador de reservas para cada dia
          const dailyCount = {};

          reservations.forEach((booking) => {
            let current = new Date(booking.startDate);
            const bookingEnd = new Date(booking.endDate);

            // Mientras fecha inicio sea menor a fecha fin:
            while (current <= bookingEnd) {
              const dateKey = current.toISOString().split("T")[0];

              dailyCount[dateKey] =
                (dailyCount[dateKey] || 0) + booking.dogs.length;
              current.setDate(current.getDate() + 1);
            }
          });

          let current = new Date(startDate);
          while (current <= endDate) {
            const dateKey = current.toISOString().split("T")[0];
            const totalPets = (dailyCount[dateKey] || 0) + dogs.length;

            if (totalPets > 50) {
              throw new Errors.ExistenceError(
                `Booking limit exceeded on ${dateKey}`
              );
            }

            current.setDate(current.getDate() + 1);
          }

          return Booking.create({
            owner: userId,
            dogs: dogs,
            startDate: startDate,
            endDate: endDate,
          });
        })
        .catch((error) => {
          throw new Errors.UnexpectedError(error.message);
        })
    );
  });
};
