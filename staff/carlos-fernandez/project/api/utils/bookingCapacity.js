import { Errors } from "common";

export default (reservations, dogs, startDate, endDate) => {
  let dailyCount = {};
  let current = new Date(startDate);

  // Inicializar el conteo diario con las reservas existentes
  reservations.forEach((booking) => {
    let bookingCurrent = new Date(booking.startDate);
    const bookingEnd = new Date(booking.endDate);

    while (bookingCurrent <= bookingEnd) {
      const dateKey = new Date(bookingCurrent.getTime())
        .toISOString()
        .split("T")[0];
      dailyCount[dateKey] = (dailyCount[dateKey] || 0) + booking.dogs.length;
      bookingCurrent.setDate(bookingCurrent.getDate() + 1);
    }
  });

  // Agregar el conteo de los nuevos perros
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
