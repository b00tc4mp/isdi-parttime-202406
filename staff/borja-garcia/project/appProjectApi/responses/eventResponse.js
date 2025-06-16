export const eventResponse = (...events) => {
  // Verifica si se ha pasado más de un usuario (es decir, un arreglo)
  if (Array.isArray(events[0])) {
    // Si es un arreglo, formatea cada usuario
    return events[0].map((event) => ({
      eventName: event.eventName,
      startDateTime: event.startDateTime,
      duration: event.duration,
      color: event.color,
      category: event.category,
      eventId: event.id
    }));
  }

  // Si no es un arreglo, formatea solo un usuario
  const [event] = events;
  return {
    eventName: event.eventName,
    startDateTime: event.startDateTime,
    duration: event.duration,
    color: event.color,
    category: event.category,
    eventId: event.id
  };
};
