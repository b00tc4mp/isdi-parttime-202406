import models from "../data/models.js";
import { Errors, Validator } from "common";

const { User, Booking } = models;
export default ({ userId, dogId, startDate, endDate }) => {
  Validator.id(userId);
  if (!Array.isArray(dogId)) {
    throw new Errors.BookingNotValidError("DogId must be an array");
  }
  dogId.forEach((dogId) => Validator.id(dogId));
  Validator.startDate(startDate);
  Validator.endDate(endDate);

  if (new Date(startDate) >= new Date(endDate)) {
    throw new Errors.BookingNotValidError("Start date must be before end date");
  }

  //Buscamos al usuario en la bbdd
  return User.findById(userId).then((user) => {
    if (!user) throw new Errors.NotFoundError("User not found");

    // Buscamos los perros
    const userDogs = user.dogs.map((dog) => dog._id.toString());

    // Buscamos si hay alguno que no coincida
    const invalidDogs = dogId.filter((dogId) => !userDogs.includes(dogId));
    if (invalidDogs.length > 0) {
      throw new Errors.CredentialsError("One or more dogs not found");
    }

    return Booking.find({
      startDate: { $lte: endDate },
      endDate: { $gte: startDate },
    })
      .then((reservations) => {
        const dailyCount = {};

        reservations.forEach((booking) => {
          let current = new Date(booking.startDate);
          const bookingEnd = new Date(booking.endDate);

          while (current <= bookingEnd) {
            const dateKey = current.toISOString().split("T")[0]; // Formato YYYY-MM-DD
            dailyCount[dateKey] =
              (dailyCount[dateKey] || 0) + booking.dogs.length;
            current.setDate(current.getDate() + 1);
          }
        });

        let current = new Date(startDate);
        while (current <= endDate) {
          const dateKey = current.toISOString().split("T")[0];
          const totalPets = (dailyCount[dateKey] || 0) + dogId.length;

          if (totalPets > 50) {
            throw new Errors.ExistenceError(
              `Booking limit exceeded on ${dateKey}`
            );
          }

          current.setDate(current.getDate() + 1);
        }

        return Booking.create({
          owner: userId,
          dogs: dogId,
          startDate: startDate,
          endDate: endDate,
        });
      })
      .catch((error) => {
        throw new Errors.UnexpectedError(error.message);
      });
  });
};
