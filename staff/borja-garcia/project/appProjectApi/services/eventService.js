import Event from "../models/events.js";
import * as Errors from "../errors/errors.js";
import mongoose from "mongoose";

export const createEvent = async (eventObject, userId) => {
  const { ...eventData } = eventObject;

  // Crear y guardar el evento
  const event = new Event({
    user: userId,
    ...eventData,
  });

  const savedEvent = await event.save();
  // if (!savedEvent) throw new Errors.SaveError("Error al crear el evento");
  return savedEvent;
};

// Obtener todos los eventos
export const getEvents = async () => {
  const eventsFound = await Event.find();
  if (!eventsFound || eventsFound.length === 0)
    throw new Errors.NotFoundError("No existen eventos");
  return eventsFound;
};

export const deleteEventById = async (eventId) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (!deletedEvent)
      throw new Errors.DeleteError("No se pudo eliminar el evento");
    return deletedEvent;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError)
      throw new Errors.CastError("ID de evento inválido");
    // Si el error no es un CastError, lo lanzamos tal cual
    throw error;
  }
};

export const updateEventById = async (eventId, updatedEvent) => {
  try {
    const eventUpdated = await Event.findByIdAndUpdate(eventId, updatedEvent, {
      new: true,
    });
    if (!eventUpdated)
      throw new Errors.UpdateError("No se pudo actualizar el evento");
    return eventUpdated;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError)
      throw new Errors.CastError("ID de evento inválido");
    // Si el error no es un CastError, lo lanzamos tal cual
    throw error;
  }
};

export const getEventById = async (eventId) => {
  try {
    const eventFound = await Event.findById(eventId);
    if (!eventFound) throw new Errors.NotFoundError("No se encontró el evento");
    return eventFound;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError)
      throw new Errors.CastError("ID de evento inválido");
    // Si el error no es un CastError, lo lanzamos tal cual
    throw error;
  }
};

export const getEventsByUserId = async (userId) => {
  try {
    const eventsFound = await Event.find({ user: userId });
    if (!eventsFound || eventsFound.length === 0)
      throw new Errors.NotFoundError("No existen eventos para este usuario");
    return eventsFound;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError)
      throw new Errors.CastError("ID de usuario inválido");
    // Si el error no es un CastError, lo lanzamos tal cual
    throw error;
  }
};
