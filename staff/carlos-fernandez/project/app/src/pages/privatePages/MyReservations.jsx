import { useState, useEffect } from "react";
import BookingCard from "../../components/cards/BookingCard";
import NoBookingMessage from "../../components/cards/NoBookingMessage";
import BookingCalendar from "../../components/forms/BookingCalendar";
import createBooking from "../../logic/createBooking.js";
import getUserBookings from "../../logic/getUserBookings.js";
import BookingSuccess from "../../components/cards/BookingSuccess.jsx";

function MyReservations() {
  const [bookings, setBookings] = useState([]); // Almacena las reservas
  const [isAddingBooking, setIsAddingBooking] = useState(false); // Boolean sobre el estado de añadir reserva
  const [isSuccess, setIsSuccess] = useState(false); // Boolean de exito al reservar
  const [stamp, setStamp] = useState(Date.now()); // Marca de tiempo para actualizar datos

  useEffect(() => {
    getUserBookings()
      .then((requestedBookings) => {
        const formattedBookings = requestedBookings.map((booking) => ({
          id: booking._id,
          dogNames: booking.dogs.map((dog) => dog.dogName).join(", "),
          startDate: new Date(booking.startDate).toLocaleDateString(),
          endDate: new Date(booking.endDate).toLocaleDateString(),
        }));
        setBookings(formattedBookings);
      })
      .catch((err) => console.error("Error al cargar reservas", err));
  }, [stamp]);

  const onSubmit = async (bookingData) => {
    try {
      await createBooking(bookingData);
      setIsAddingBooking(false);
      setIsSuccess(true);
      setStamp(Date.now()); // Actualiza el tiempo para recargar los datos
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isSuccess && <BookingSuccess onClose={() => setIsSuccess(false)} />}
      {bookings.length === 0 ? (
        isAddingBooking ? ( //No hay reservas pero estamos añadiendo una
          <BookingCalendar onSubmit={onSubmit} />
        ) : (
          // No hay reservas y no estamos añadiendo ninguna
          <NoBookingMessage onAddBooking={() => setIsAddingBooking(true)} />
        )
      ) : (
        // Hay reservas y no estamos añadiendo ninguna
        <>{!isAddingBooking && <BookingCard bookings={bookings} />}</>
      )}
    </div>
  );
}

export default MyReservations;
