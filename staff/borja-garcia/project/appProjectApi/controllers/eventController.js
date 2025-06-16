import express from "express";
import jwt from "jsonwebtoken";
import {
  createEvent,
  deleteEventById,
  getEventById,
  getEvents,
  updateEventById,
  getEventsByUserId,
} from "../services/eventService.js"; // Importa funciones del controlador
import { getUserById, saveUserEvent } from "../services/userService.js";
import { eventResponse } from "../responses/eventResponse.js";
import {
  createEventRequest,
  updateEventRequest,
} from '../requests/eventRequest.js';
const router = express.Router();

// Crear un evento
router.post("/users/", async (req, res, next) => {
  try {
    const eventData = await createEventRequest(req.body);
    // Verifica que el usuario exista
    const token = req.headers.authorization;
    const { userId } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    const user = await getUserById(userId);
    const savedEvent = await createEvent(eventData, user.id);
    await saveUserEvent(user, savedEvent); // Guarda el evento en la base de datos

    res.status(200).json({ message: "Evento creado correctamente" });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const event = await getEventById(req.params.id);
    res.status(200).json(eventResponse(event));
  } catch (error) {
    next(error);
  }
});

// Obtener todos los eventos
router.get("/", async (req, res, next) => {
  try {
    const events = await getEvents();
    res.status(200).json(eventResponse(events));
  } catch (error) {
    next(error);
  }
});

router.get("/users/user", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { userId } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    await getUserById(userId); // Busca por ID
    const events = await getEventsByUserId(userId);
    res.status(200).json(eventResponse(events));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await deleteEventById(req.params.id); // Busca y elimina el usuario por su ID

    res.status(200).json({ message: "Evento eliminado correctamente" });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateEvent = await updateEventRequest(req.body);
    await updateEventById(req.params.id, updateEvent); // Busca y modifica el usuario por su ID

    res.status(200).json({ message: "Evento modificado correctamente" });
  } catch (error) {
    next(error);
  }
});

export default router;
