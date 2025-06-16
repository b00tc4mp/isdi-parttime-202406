import * as Errors from "../errors/errors.js";

export const createEventRequest = async (body) => {
  const { eventName, startDateTime, duration, color, category} = body;

  // Validaciones generales
  if (!eventName?.trim() || !startDateTime || !category?.trim()) {
    throw new Errors.BadRequestError("Faltan campos obligatorios.");
  }

  // Validación de formato del nombre del evento
  if (eventName.length > 100 || eventName.length < 3) {
    throw new Errors.BadRequestError("El nombre del evento debe ser mayor a 3 caracteres y menor que 100.");
  }

  // Validación de formato de la fecha de inicio
  const date = new Date(startDateTime);
  if (isNaN(date.getTime())) {
    throw new Errors.BadRequestError("La fecha y hora de inicio no es válida.");
  }

  // Validación de duración (opcional, si se proporciona)
  if (duration !== undefined && (!Number.isInteger(duration) || duration < 0)) {
    throw new Errors.BadRequestError("La duración debe ser un número entero positivo.");
  }

  // Validación de color (opcional, si se proporciona)
  const colorRegex = /^#([0-9A-F]{3}){1,2}$/i;
  if (color && !colorRegex.test(color)) {
    throw new Errors.BadRequestError("El color no se ha seleccionado correctamente.");
  }

  // Validación de categoría
  const validCategories = ["Ansiedad", "Ataque de Pánico", "Autolesión", "Otro"];
  if (!validCategories.includes(category)) {
    throw new Errors.BadRequestError(
      `La categoría debe ser una de las siguientes: ${validCategories.join(", ")}.`
    );
  }

  return { eventName, startDateTime: date, duration, color, category};
};

export const updateEventRequest = async (body) => {
  const { eventName, startDateTime, duration, color, category } = body;

  // Validaciones generales (solo los campos que pueden ser actualizados)
  if (!eventName && !startDateTime && !duration && !color && !category) {
    throw new Errors.BadRequestError("No se proporcionaron campos para actualizar.");
  }

  if (eventName && eventName.length > 100) {
    throw new Errors.BadRequestError("El nombre del evento debe ser mayor a 3 caracteres y menor que 100.");
  }

  

  if (startDateTime) {
    const date = new Date(startDateTime);
    if (isNaN(date.getTime())) {
      throw new Errors.BadRequestError("La fecha y hora de inicio no es válida.");
    }
  }

  if (duration !== undefined && (!Number.isInteger(duration) || duration < 0)) {
    throw new Errors.BadRequestError("La duración debe ser un número entero positivo.");
  }

  if (color && !/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
    throw new Errors.BadRequestError("El color no se ha seleccionado correctamente");
  }

  if (category) {
    const validCategories = ["Ansiedad", "Ataque de Pánico", "Autolesión", "Otro"];
    if (!validCategories.includes(category)) {
      throw new Errors.BadRequestError(
        `La categoría debe ser una de las siguientes: ${validCategories.join(", ")}.`
      );
    }
  }

  // Devuelve solo los campos que están definidos
  return {
    ...(eventName && { eventName }),
    ...(startDateTime && { startDateTime: new Date(startDateTime) }),
    ...(duration !== undefined && { duration }),
    ...(color && { color }),
    ...(category && { category }),
  };
};
