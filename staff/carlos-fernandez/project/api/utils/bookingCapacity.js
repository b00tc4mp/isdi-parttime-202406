import { Errors } from "common";

export default (reservations, dogs, startDate, endDate) => {
  let dogBookings = {};

  reservations.forEach((booking) => {
    booking.dogs.forEach((dog) => {
      let current = new Date(booking.startDate);
      const bookingEnd = new Date(booking.endDate);

      while (current <= bookingEnd) {
        const dateKey = new Date(current.getTime()).toISOString().split("T")[0];
        if (!dogBookings[dog.toString()]) {
          dogBookings[dog.toString()] = new Set();
        }
        dogBookings[dog.toString()].add(dateKey);
        current.setDate(current.getDate() + 1);
      }
    });
  });

  for (const dogId of dogs) {
    let current = new Date(startDate);
    while (current <= new Date(endDate)) {
      const dateKey = new Date(current.getTime()).toISOString().split("T")[0];
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
};
