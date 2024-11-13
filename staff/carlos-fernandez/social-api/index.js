// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html

import express, { json } from "express";
import handlers from "./handlers/index.js";
import handleErrors from "./middlewares/handleErrors.js";

const server = express();
const port = 4321;

const jsonBodyParser = json();

server.post(
  "/users",
  jsonBodyParser,
  /*Más middlewares*/ handlers.registerUser
);

server.get("/users", handlers.getAllUsers);

server.get("/users/:idRequested", handlers.getOneUser);

//TODO (Flors) Arregla esto
server.use(handleErrors);

//TODO: Añadir un delete, patch username, patch email, patch password

server.listen(port, () => {
  console.log(`Server running on port:`, port);
});
