import { format, parse, startOfWeek, getDay } from "date-fns";
import esES from "date-fns/locale/es"; // Cambia según el idioma deseado
import { dateFnsLocalizer } from "react-big-calendar";

// Configuración de locales
const locales = { "es": esES };

// Configuración del localizador
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // Lunes como primer día
  getDay,
  locales,
});

export default localizer;
