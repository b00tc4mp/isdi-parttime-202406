import express, { json } from "express";
import handlers from "./handlers/index.js";
import { errorHandler, verifyToken } from "./middlewares/index.js";
import "dotenv/config";
import cors from "cors";
import { Errors } from "common";
import mongoose from "mongoose";

try {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.info(`connected to db: ${process.env.MONGO_URI}`);

      const server = express();

      const jsonBodyParser = json();

      server.use(cors());

      server.post("/users", jsonBodyParser, handlers.registerUser);

      server.post("/users/auth", jsonBodyParser, handlers.authenticateUser);

      server.get("/users/username", verifyToken, handlers.getUsername);

      server.get("/users/me", verifyToken, handlers.getUser);

      server.use(errorHandler);

      server.listen(process.env.PORT, () => {
        console.log(`Server running on port:`, process.env.PORT);
      });
    })
    .catch((error) => {
      throw new Errors.ServerError(`db error: ${error.message}`);
    });
} catch (error) {
  throw new Errors.UnexpectedError(error.message);
}
