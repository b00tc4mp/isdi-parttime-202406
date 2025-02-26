import { useEffect, useState, useRef } from "react";
import getEventsByUser from "../logic/getEventsByUser";
import createEvent from "../logic/createEvent";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
moment.updateLocale("es", { week: { dow: 1 } });
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState("");
  const [newEvent, setNewEvent] = useState({
    eventName: "", // Renombrado de title a eventName para consistencia
    start: "",
    end: "",
    category: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const formRef = useRef(null);
  const categories = ["Ansiedad", "Ataque de Pánico", "Autolesión", "Otro"];

  useEffect(() => {
    fetchCalendarEvents(); // Renombrado función para claridad y manejo de errores
  }, []);

  const fetchCalendarEvents = async () => {
    // Renombrado y mejor manejo de errores
    try {
      const formattedEvents = await getCalendarEvent();
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching calendar events:", error);
      setError("Aún no hay eventos en tu calendario."); // Mostrar error al usuario
      setEvents([]); // Asegurar que events no sea null, incluso en error
    }
  };

  const getCalendarEvent = async () => {
    try {
      const fetchedEvents = await getEventsByUser();

      const formattedEvents = fetchedEvents.map((event) => {
        const startDateTime = new Date(event.startDateTime);
        const endDateTime = new Date(
          startDateTime.getTime() + event.duration * 60000
        );

        return {
          title: `${event.eventName} (${event.category})`,
          start: new Date(event.startDateTime),
          end: endDateTime,
          allDay: event.duration === null,
          color: event.color,
          category: event.category,
          duration: event.duration,
        };
      });

      return formattedEvents;
    } catch (err) {
      console.error("Error al obtener los eventos:", err);
      throw err;
    }
  };

  const createCalendarEvent = async (
    // Mantener parámetros consistentes con lógica backend
    eventName,
    startDateTime,
    duration,
    color,
    category,
    userId // Asumiendo que userId se maneja en backend o se pasa correctamente si necesario
  ) => {
    try {
      await createEvent(
        eventName,
        startDateTime,
        duration,
        color,
        category,
        userId
      );
      // Limpiamos state de evento
      setNewEvent({
        eventName: "",
        startDateTime: "",
        duration: "",
        category: "",
      });
      await fetchCalendarEvents(); // Refrescar eventos para actualizar calendario tras crear evento
    } catch (err) {
      console.error("Error al crear el evento:", err);
      setError(err.message || "Error al crear el evento");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEvent = async () => {
    if (
      newEvent.eventName &&
      newEvent.start &&
      newEvent.end &&
      newEvent.category
    ) {
      // Usar eventName
      const start = new Date(newEvent.start);
      const end = new Date(newEvent.end);

      if (end <= start) {
        alert("La fecha de fin debe ser posterior a la fecha de inicio.");
        return;
      }

      const durationInMs = end - start;
      const durationInMinutes = Math.floor(durationInMs / (1000 * 60));

      setShowForm(false);

      await createCalendarEvent(
        newEvent.eventName,
        newEvent.start,
        durationInMinutes,
        null,
        newEvent.category
      );
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleCloseEventModal = () => {
    setShowEventModal(false);
  };

  return (
    <div className="p-4" style={{ backgroundColor: "E0F7FA" }}>
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="btn btn-primary mb-4"
      >
        {showForm ? "Cerrar Formulario" : "Crear Evento"}
      </button>
      {error && (
        <div className="alert alert-error mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2v4m0-4h4m-4-4L8 14m-2 2l2-2m7-2h2m-2-2H5m6 2h6m-6-2H5"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}{" "}
      {/* Display error message */}
      {showForm && (
        <div className="modal modal-open">
          <div className="modal-box" ref={formRef}>
            {" "}
            {/* Added ref to modal-box, not modal */}
            <h3 className="font-bold text-lg">Crear un nuevo evento</h3>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Título del evento:</span>{" "}
                {/* Updated label to eventName */}
              </label>
              <input
                type="text"
                name="eventName" // Updated name to eventName
                value={newEvent.eventName} // Updated value to eventName
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Fecha de inicio:</span>
              </label>
              <input
                type="datetime-local"
                name="start"
                value={newEvent.start}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Fecha de fin:</span>
              </label>
              <input
                type="datetime-local"
                name="end"
                value={newEvent.end}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Categoría:</span>
              </label>
              <select
                name="category"
                value={newEvent.category}
                onChange={handleInputChange}
                className="select select-bordered w-full"
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-action">
              <button onClick={handleAddEvent} className="btn btn-success">
                Añadir Evento
              </button>
              <button onClick={handleCloseForm} className="btn">
                Cerrar
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}
      {events && (
        <div className="w-full h-[60vh]">
          <Calendar
            localizer={localizer}
            culture="es"
            formats={{
              weekdayFormat: (date, culture, localizer) =>
                localizer.format(date, "ddd", culture),
              dayFormat: (date, culture, localizer) =>
                localizer.format(date, "DD", culture),
            }}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleSelectEvent}
            messages={{
              next: "Siguiente",
              previous: "Anterior",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
              agenda: "Agenda",
              noEventsInRange: "No hay eventos en este rango.",
            }}
            components={{
              toolbar: (toolbar) => {
                return (
                  <div
                    style={{
                      backgroundColor: "#A5D6A7",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#424242", fontWeight: "bold" }}>
                      {toolbar.label}
                    </span>
                    <div>
                      <button
                        style={{
                          backgroundColor: "#E0F7FA",
                          color: "#424242",
                          border: "none",
                          padding: "8px",
                          margin: "0 5px",
                          cursor: "pointer",
                        }}
                        onClick={() => toolbar.onNavigate("PREV")}
                      >
                        Anterior
                      </button>
                      <button
                        style={{
                          backgroundColor: "#E0F7FA",
                          color: "#424242",
                          border: "none",
                          padding: "8px",
                          margin: "0 5px",
                          cursor: "pointer",
                        }}
                        onClick={() => toolbar.onNavigate("NEXT")}
                      >
                        Siguiente
                      </button>
                    </div>
                  </div>
                );
              },
            }}
            eventPropGetter={(event) => {
              // Añadimos eventPropGetter para personalizar colores de eventos
              let backgroundColor = "#E0F7FA"; // Color por defecto
              if (event.category === "Ansiedad") {
                backgroundColor = "#FFDAB9";
              } else if (event.category === "Ataque de Pánico") {
                backgroundColor = "#FFB3B3";
              } else if (event.category === "Autolesión") {
                backgroundColor = "#D1C4E9";
              } else if (event.category === "Otro") {
                backgroundColor = "#C8E6C9";
              }
              return {
                style: {
                  backgroundColor: backgroundColor,
                  color: "#424242",
                  borderRadius: "5px",
                  border: "0px",
                },
              };
            }}
          />
        </div>
      )}
      {showEventModal && selectedEvent && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{selectedEvent.title}</h3>
            <p>
              <strong>Categoría:</strong> {selectedEvent.category}
            </p>
            <p>
              <strong>Inicio:</strong>{" "}
              {moment(selectedEvent.start).format("LLLL")}
            </p>
            <p>
              <strong>Fin:</strong> {moment(selectedEvent.end).format("LLLL")}
            </p>
            <div className="modal-action">
              <button
                onClick={handleCloseEventModal}
                className="btn btn-primary"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CalendarComponent;
