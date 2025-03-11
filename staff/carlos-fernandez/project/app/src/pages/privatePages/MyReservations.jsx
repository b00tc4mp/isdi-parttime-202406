import { useState, useEffect } from "react";
import {
  BookingCard,
  BookingCalendar,
  BookingDeletedSuccessfully,
  BookingSuccess,
  NoBookingMessage,
} from "../../components/index.jsx";
import logic from "../../logic/index.js";
import { useHeaderHeight } from "../../hooks/useHeaderHeight";

function MyReservations() {
  const [bookings, setBookings] = useState([]); // Almacena las reservas
  const [isAddingBooking, setIsAddingBooking] = useState(false); // Boolean sobre el estado de añadir reserva
  const [isSuccess, setIsSuccess] = useState(false); // Boolean de exito al reservar
  const [stamp, setStamp] = useState(Date.now()); // Marca de tiempo para actualizar datos
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false); // Boolean de éxito al eliminar la reserva

  const headerHeight = useHeaderHeight();

  useEffect(() => {
    logic
      .getUserBookings()
      .then((requestedBookings) => {
        const formattedBookings = requestedBookings.map((booking) => ({
          id: booking._id,
          dogNames: booking.dogs.map((dog) => dog.dogName).join(", "),
          startDate: new Date(booking.startDate).toLocaleDateString(),
          endDate: new Date(booking.endDate).toLocaleDateString(),
          dogs: booking.dogs,
        }));
        setBookings(formattedBookings);
      })
      .catch((err) => console.error("Error al cargar reservas", err));
  }, [stamp]);

  const onSubmit = async (bookingData) => {
    try {
      await logic.createBooking(bookingData);
      setIsAddingBooking(false);
      setIsSuccess(true);
      setStamp(Date.now()); // Actualiza el tiempo para recargar los datos
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    try {
      await logic.deleteBooking(bookingId);
      setIsDeleteSuccess(true);
    } catch (error) {
      console.error("Error al eliminar reserva", error);
    }
  };

  const handleRemoveDogsFromBooking = async (bookingId, dogIds) => {
    try {
      await logic.removeDogsFromBooking(bookingId, dogIds);
      setIsDeleteSuccess(true);
    } catch (error) {
      console.error("Error al eliminar mascota", error);
    }
  };
  return (
    <section
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
      className=" sm:py-10"
    >
      {isSuccess && <BookingSuccess onClose={() => setIsSuccess(false)} />}
      {isDeleteSuccess && (
        <BookingDeletedSuccessfully
          onClose={() => {
            setIsDeleteSuccess(false);
            setStamp(Date.now()); // Actualiza la lista de reservas solo al cerrar el mensaje
          }}
        />
      )}
      {bookings.length === 0 ? (
        isAddingBooking ? (
          <BookingCalendar onSubmit={onSubmit} />
        ) : (
          <NoBookingMessage
            onAddBooking={() => {
              setIsAddingBooking(true);
              setIsDeleteSuccess(false);
            }}
          />
        )
      ) : (
        <>
          {!isAddingBooking && (
            <BookingCard
              bookings={bookings}
              onDeleteBooking={handleDeleteBooking}
              onRemoveDog={handleRemoveDogsFromBooking}
            />
          )}
        </>
      )}
    </section>
  );
}

export default MyReservations;
