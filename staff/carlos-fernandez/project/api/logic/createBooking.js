import models from "../data/models.js";
import { Errors, Validator } from "common";

const { User, Booking } = models;

export default ({ userId, dogs, startDate, endDate }) => {
  console.log("Solicitud recibida con-------", {
    userId,
    dogs,
    startDate,
    endDate,
  });

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

  // Buscamos al usuario
  return User.findById(userId).then((user) => {
    if (!user) throw new Errors.NotFoundError("User not found");

    //Obtenemos los id de los perros asociados al usuario
    const userDogs = user.dogs.map((dog) => dog._id.toString());

    //Verificamos que los perros que se quieren reservar pertenecen al usuario
    const invalidDogs = dogs.filter((dogId) => !userDogs.includes(dogId));
    if (invalidDogs.length > 0) {
      throw new Errors.CredentialsError("One or more dogs not found");
    }

    // Buscamos todas las reservas que coincidan con las mismas fechas
    return Booking.find({
      startDate: { $lte: endDate },
      endDate: { $gte: startDate },
    }).then((reservations) => {
      let existingBooking = null; //Almacena la reserva existente del usuario (si la hay).
      let dailyCount = {}; // Almacena el número de perros reservados para cada día.
      let dogBookings = {}; // Almacena las reservas existentes para cada perro

      // Iteramos sobre las reservas encontradas en esas fechas
      reservations.forEach((booking) => {
        let current = new Date(booking.startDate);
        const bookingEnd = new Date(booking.endDate);

        while (current <= bookingEnd) {
          const dateKey = new Date(current.getTime())
            .toISOString()
            .split("T")[0];

          // Actualizamos contador de perros reservados para cada dia
          dailyCount[dateKey] =
            (dailyCount[dateKey] || 0) + booking.dogs.length;
          current.setDate(current.getDate() + 1);
        }

        // Actualizamos contador de reservas existentes para cada perro
        booking.dogs.forEach((dog) => {
          // Si en dogBookings (reservas existentes para el perro) no está el perro que queremos que queremos reservar, se añade a dogBookings
          if (!dogBookings[dog.toString()]) {
            dogBookings[dog.toString()] = new Set();
          }

          let currentDogDate = new Date(booking.startDate);
          while (currentDogDate <= bookingEnd) {
            const dateKey = new Date(currentDogDate.getTime())
              .toISOString()
              .split("T")[0];
            dogBookings[dog.toString()].add(dateKey);
            currentDogDate.setDate(currentDogDate.getDate() + 1);
          }
        });

        // Verifica si el usuario ya tiene una reserva existente en estas fechas y la actualiza
        if (booking.owner.toString() === userId.toString()) {
          if (
            new Date(booking.startDate).getTime() ===
              new Date(startDate).getTime() &&
            new Date(booking.endDate).getTime() === new Date(endDate).getTime()
          ) {
            existingBooking = booking;
          }
        }
      });

      // Verificación de disponibilidad de dias
      let daysToBook = [];
      let current = new Date(startDate);

      // Iteramos sobre cada dia del rango de fechas a reservar
      while (current <= new Date(endDate)) {
        const dateKey = new Date(current.getTime()).toISOString().split("T")[0];
        let canBook = true;

        // Iteramos sobre los perros que se quieren reservar
        dogs.forEach((dogId) => {
          // Si el perro tiene reserva, no va a poder hacerla
          if (dogBookings[dogId]?.has(dateKey)) {
            canBook = false;
          }
        });

        // Si puede hacer reserva (porque no se está solapando) y aún añadiéndolo hay menos de 50
        if (canBook && (dailyCount[dateKey] || 0) + dogs.length <= 50) {
          daysToBook.push(dateKey);
        }
        current.setDate(current.getDate() + 1);
      }

      // CREACIÓN O ACTUALIZACION DE RESERVA

      // Si no hay dias disponibles
      if (daysToBook.length === 0) {
        throw new Errors.BookingNotValidError(
          "No puedes reservar estos dias para esta mascota"
        );
      }

      // Si existe una reserva pero es posible, se actualiza la que hay
      if (existingBooking) {
        return Booking.findByIdAndUpdate(
          existingBooking._id,
          { $addToSet: { dogs: { $each: dogs } } },
          { new: true }
        );
      }

      // Si no existe, crea una nueva
      return Booking.create({
        owner: userId,
        dogs: dogs,
        startDate: daysToBook[0],
        endDate: daysToBook[daysToBook.length - 1],
      });
    });
  });
};
