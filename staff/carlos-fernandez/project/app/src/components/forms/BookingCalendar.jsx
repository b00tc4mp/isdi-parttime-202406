import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getUserDogs from "../../logic/getUserDogs.js";
import classNames from "classnames";

export default function BookingCalendar({ className, onSubmit }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDogs, setSelectedDogs] = useState([]);
  const [error, setError] = useState("");
  const [userDogs, setUserDogs] = useState([]);

  useEffect(() => {
    getUserDogs()
      .then(setUserDogs)
      .catch((err) => setError(err.message));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate || selectedDogs.length === 0) {
      setError("Selecciona fechas y al menos una mascota.");
      return;
    }

    if (startDate < today || endDate < today) {
      setError("No puedes seleccionar fechas anteriores a hoy.");
      return;
    }

    const formattedStartDate = startDate.toLocaleDateString("en-CA"); // YYYY-MM-DD sin conversión UTC
    const formattedEndDate = endDate.toLocaleDateString("en-CA");

    console.log("FECHA INICIO ENVIADA:", formattedStartDate);
    console.log("FECHA FIN ENVIADA:", formattedEndDate);
    console.log("PERROS ENVIADOS", selectedDogs);

    try {
      await onSubmit({
        dogs: selectedDogs,
        startDate: formattedStartDate, // Se mantiene igual sin cambio de zona horaria
        endDate: formattedEndDate,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); //comparamos solo fecha, sin horas
  return (
    <div className="w-full">
      <div
        className={classNames(
          " animate-expandShadow bg-customBackground max-w-96 h-auto overflow-y rounded-xl",
          className
        )}
      >
        <form
          onSubmit={handleSubmit}
          className="p-4 bg-white shadow-lg flex flex-col items-center mb-40 rounded-xl"
        >
          <h2 className="text-xl font-bold mb-4 text-black">Haz tu reserva</h2>

          <label className="block mb-2 text-black font-semibold">
            Selecciona Fecha de Inicio:
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={today}
            wrapperClassName="datepicker-wrapper"
          />

          <label className="block mt-4 mb-2 text-black font-semibold">
            Selecciona Fecha de Fin:
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || today}
            wrapperClassName="datepicker-wrapper"
          />

          <label className="block mt-4 mb-2 text-black font-semibold">
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
                  onChange={(e) =>
                    setSelectedDogs(
                      (prev) =>
                        e.target.checked
                          ? [...prev, dog._id] //Checkbox marcado? añadimos id del perro
                          : prev.filter((id) => id !== dog._id) // Checkbox DESMARCADO? eliminamos el id del perro
                    )
                  }
                  className="text-black"
                />
                <span>{dog.dogName}</span>
              </label>
            ))}
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Reservar
          </button>
        </form>
      </div>
    </div>
  );
}
