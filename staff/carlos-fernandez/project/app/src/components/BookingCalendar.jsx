import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import createBooking from "../logic/createBooking.js";
import getUserDogs from "../logic/getUserDogs.js";
import { Errors } from "common";

export default function BookingCalendar({ token }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDogs, setSelectedDogs] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [userDogs, setUserDogs] = useState([]);

  useEffect(() => {
    const fetchUserDogs = async () => {
      try {
        const petsData = await getUserDogs();
        setUserDogs(petsData);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fetchUserDogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!startDate || !endDate || selectedDogs.length === 0) {
      setError("Selecciona fechas y al menos un perro.");
      return;
    }

    try {
      await createBooking({
        dogIds: selectedDogs,
        startDate,
        endDate,
      });
      setSuccess("Reserva creada con éxito");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Crear Reserva</h2>

      <label className="block mb-2 text-black">
        Selecciona Fecha de Inicio:
      </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="border p-2 w-full text-black"
      />

      <label className="block mt-4 mb-2 text-black">
        Selecciona Fecha de Fin:
      </label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className="border p-2 w-full text-black"
      />

      <label className="block mt-4 mb-2 text-black">
        Selecciona tus perros:
      </label>
      <div className="flex flex-wrap gap-2 text-black">
        {userDogs.map((dog) => (
          <label
            key={dog._id}
            className="flex items-center space-x-2 text-black"
          >
            <input
              type="checkbox"
              value={dog._id}
              onChange={(e) => {
                const selected = e.target.checked
                  ? [...selectedDogs, dog._id]
                  : selectedDogs.filter((id) => id !== dog._id);
                setSelectedDogs(selected);
              }}
              className="text-black"
            />
            <span>{dog.dogName}</span>
          </label>
        ))}
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Reservar
      </button>
    </form>
  );
}
