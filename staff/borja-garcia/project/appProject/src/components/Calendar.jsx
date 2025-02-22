import { useEffect, useState, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "../styles/calendar.css"; // Archivo CSS separado para estilos
import createEvent from "../logic/createEvent";
import getEventsByUser from "../logic/getEventsByUser";
import PropTypes from 'prop-types';

const localizer = momentLocalizer(moment);

const getCalendarEvent = async (setEvents) => {
  try {
    const fetchedEvents = await getEventsByUser();

    const formattedEvents = fetchedEvents.map((event) => ({
      title: `${event.eventName} (${event.category})`,
      start: new Date(event.startDateTime),
      end: new Date(new Date(event.startDateTime) + event.duration * 60000), // Añadir duración al evento
      allDay: event.duration === null,
      color: event.color,
      category: event.category,
      duration: event.duration
      /**{
          title: `${newEvent.title} (${newEvent.category})`,
          start,
          end,
          category: newEvent.category,
          duration, // Añadir duración al evento
        }, */
    }));

    return formattedEvents
  } catch (err) {
    setEvents([]);
    console.error("Error al obtener los eventos:", err);
  }
}

const CalendarComponent = () => {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getCalendarEvent(setEvents).then((formattedEvents) => {
      setEvents(formattedEvents);
    }).catch(error => console.log(error.message))
    
   }, []);

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    category: "",
  });

  const [showForm, setShowForm] = useState(false); //Sabe si está abierto el form
  const formRef = useRef(null); // Genera una referencia para saber si está abierto el form

  const categories = ["Ansiedad", "Ataque de Pánico", "Autolesión", "Otro"];

  const createCalendarEvent = async (
    eventName,
    startDateTime,
    duration,
    color,
    category,
    userId
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
      console.log("El evento fue creado correctamente");
      setNewEvent({
        eventName: "",
        startDateTime: "",
        duration: "",
        category: "",
      }); // Limpia los campos del formulario después de crear el evento
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
    if (newEvent.title && newEvent.start && newEvent.end && newEvent.category) {
      const start = new Date(newEvent.start);
      const end = new Date(newEvent.end);
  
      if (end <= start) {
        alert("La fecha de fin debe ser posterior a la fecha de inicio.");
        return;
      }
  
      // Cálculo de duración
      const durationInMs = end - start; // Diferencia en milisegundos
      const durationInMinutes = Math.floor(durationInMs / (1000 * 60)); // Total de minutos
      const hours = Math.floor(durationInMinutes / 60); // Horas completas
      const minutes = durationInMinutes % 60; // Minutos restantes
      const duration = `${hours}h ${minutes}m`; // Duración legible
  
      // Añadir evento al estado local
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          title: `${newEvent.title} (${newEvent.category})`,
          start,
          end,
          category: newEvent.category,
          duration, // Añadir duración al evento
        },
      ]);
  
      setNewEvent({ title: "", start: "", end: "", category: "" });
      setShowForm(false); // Oculta el formulario después de añadir un evento
  
      // Crear evento en el backend

      await createCalendarEvent(
          newEvent.title,
          newEvent.start,
          durationInMs, // Usar la duración calculada
          "#FFFFFF",
          newEvent.category,
        );
      
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const handleCloseForm = () => {
    console.log(events)
    setShowForm(false); // Oculta el formulario cuando se cierra
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false); // Oculta el formulario cuando se hace click fuera del mismo
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowForm(false); // Oculta el formulario cuando se presiona la tecla Esc
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mi Calendario 📅</h1>
      {/* Botón para mostrar/ocultar el formulario */}
      <button
        onClick={() => setShowForm((prev) => !prev)}
        style={{
          margin: "20px 0",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showForm ? "Cerrar Formulario" : "Crear Evento"}
      </button>

      {/* Formulario para crear un nuevo evento con animación */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Crear un nuevo evento</h3>
            <div style={{ marginBottom: "10px" }}>
              <label>Título:</label>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "5px", marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Fecha de inicio:</label>
              <input
                type="datetime-local"
                name="start"
                value={newEvent.start}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "5px", marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Fecha de fin:</label>
              <input
                type="datetime-local"
                name="end"
                value={newEvent.end}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "5px", marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Categoría:</label>
              <select
                name="category"
                value={newEvent.category}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "5px", marginTop: "5px" }}
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleAddEvent}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Añadir Evento
            </button>
            <button
              onClick={handleCloseForm}
              style={{
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cerrar
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      )}

      {/* Calendario */}
      {events && <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "40vh",
          maxWidth: "400px",
          maxHeight: "400px",
          margin: "20px 0",
        }}
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
      />}
    </div> );
};

CalendarComponent.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default CalendarComponent;
