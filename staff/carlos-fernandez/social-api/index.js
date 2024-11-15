// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html
// https://www.npmjs.com/package/dotenv

import express, { json } from "express";
import handlers from "./handlers/index.js";
import { errorHandler } from "./middlewares/index.js";
import "dotenv/config";

const server = express();

const jsonBodyParser = json();

server.post(
  "/users",
  jsonBodyParser,
  /*Más middlewares*/ handlers.registerUser
);

server.post("/users/auth", jsonBodyParser, handlers.authenticateUser);

server.get("/users", handlers.getAllUsers);

server.get("/users/:idRequested", handlers.getOneUser);

server.patch("/users/username", jsonBodyParser, handlers.updateUsername);

server.delete("/users", jsonBodyParser, handlers.deleteUser);

server.use(errorHandler);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port:`, process.env.PORT);
});
