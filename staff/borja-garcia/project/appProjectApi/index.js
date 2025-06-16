import "dotenv/config";
import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import userController from "./controllers/userController.js";
import eventController from "./controllers/eventController.js";
import contactController from "./controllers/contactController.js";
import errorHandler from "./middlewares/errorHandler.js";

// Conexión a MongoDB
connect(process.env.MONGODB_URI)
  .then(() => {
    console.info(`API connected to ${process.env.MONGODB_URI}`);

    // Configuración de Express
    const api = express();

    api.use(cors({ origin: 'http://localhost:5173' }));
    // Middleware para parsear JSON
    api.use(express.json());

    // Controladores
    api.use("/users", userController); // Prefijo para las rutas de usuarios
    api.use("/events", eventController);
    api.use("/emergency-contacts", contactController); // Prefijo para las rutas de contactos de emergencia

    // **Middleware global de manejo de errores**
    api.use(errorHandler);

    // Ruta base
    api.get("/", (req, res) => {
      res.send("Hello, World!");
    });

    // Iniciar el servidor
    api.listen(process.env.PORT, () =>
      console.info(`API listening on PORT ${process.env.PORT}`)
    );

    api.post("/appProject", (req, res) => {
      res.status(200).send("ruta POST /appProject recibida correctamente");
    });
  })
  .catch((error) => console.error("Error al conectar a MongoDB:", error));
