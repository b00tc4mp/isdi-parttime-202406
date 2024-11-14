// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html

import express, { json } from "express";
import handlers from "./handlers/index.js";
import { errorHandler } from "./middlewares/index.js";
import "dotenv/config";

const server = express();

const jsonBodyParser = json();

server.post("/users", jsonBodyParser, handlers.registerUser);

server.post("/users/auth", jsonBodyParser, handlers.authenticateUser);

server.get("/users", handlers.getAllUsers);

server.get("/users/:idRequested", handlers.getOneUser);

//TODO (Flors) Arregla esto
server.use(errorHandler);

//TODO: Añadir un delete, patch username, patch email, patch password

server.listen(process.env.PORT, () => {
  console.log(`Server running on port:`, process.env.PORT);
});
