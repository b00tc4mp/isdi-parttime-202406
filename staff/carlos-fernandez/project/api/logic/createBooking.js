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
    throw new Errors.BookingNotValidError("startDate must be before endDate");
  }

  return User.findById(userId).then((user) => {
    if (!user) throw new Errors.NotFoundError("User not found");

    const userDogs = user.dogs.map((dog) => dog._id.toString());
    const invalidDogs = dogs.filter((dogId) => !userDogs.includes(dogId));
    if (invalidDogs.length > 0) {
      throw new Errors.CredentialsError("One or more dogs not found");
    }

    return Booking.find({
      owner: userId,
      dogs: { $in: dogs },
      startDate: { $lte: endDate },
      endDate: { $gte: startDate },
    }).then((reservations) => {
      let dogBookings = {};

      reservations.forEach((booking) => {
        booking.dogs.forEach((dog) => {
          if (dogs.includes(dog.toString())) {
            let current = new Date(booking.startDate);
            const bookingEnd = new Date(booking.endDate);

            while (current <= bookingEnd) {
              const dateKey = new Date(current.getTime())
                .toISOString()
                .split("T")[0];
              if (!dogBookings[dog.toString()]) {
                dogBookings[dog.toString()] = new Set();
              }
              dogBookings[dog.toString()].add(dateKey);
              current.setDate(current.getDate() + 1);
            }
          }
        });
      });

      console.log("DOGBOOOKIIINGS", dogBookings);

      for (const dogId of dogs) {
        let current = new Date(startDate);
        while (current <= new Date(endDate)) {
          const dateKey = new Date(current.getTime())
            .toISOString()
            .split("T")[0];
          if (dogBookings[dogId]?.has(dateKey)) {
            throw new Errors.BookingNotValidError(
              "Este perro ya tiene reservas para uno de los días indicados. Accede a la pestaña 'mis reservas'."
            );
          }
          current.setDate(current.getDate() + 1);
        }
      }

      let dailyCount = {};
      let current = new Date(startDate);

      while (current <= new Date(endDate)) {
        const dateKey = new Date(current.getTime()).toISOString().split("T")[0];
        dailyCount[dateKey] = (dailyCount[dateKey] || 0) + dogs.length;
        current.setDate(current.getDate() + 1);
      }

      if (Object.values(dailyCount).some((count) => count > 50)) {
        throw new Errors.BookingNotValidError(
          "No se puede realizar la reserva, se excede el aforo"
        );
      }

      return Booking.create({
        owner: userId,
        dogs: dogs,
        startDate: startDate,
        endDate: endDate,
      }).then((createdBooking) => {
        return {
          ...createdBooking.toObject(),
          startDate: createdBooking.startDate.toLocaleDateString(),
          endDate: createdBooking.endDate.toLocaleDateString(),
        };
      });
    });
  });
};
