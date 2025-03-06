import logic from "../logic/index.js";
import { Validator, Errors } from "common";

export default (req, res, next) => {
  const { bookingId } = req.body;
  const userId = req.id;

  try {
    logic
      .deleteBooking(userId, { bookingId })
      .then(() => res.status(204).send())
      .catch((error) => {
        if (error instanceof Errors.NotFoundError) {
          res.status(404).send({ error: error.message });
        } else if (error instanceof Errors.ValidationError) {
          res.status(400).send({ error: error.message });
        } else {
          next(error); // Manejo de errores genérico
        }
      });
  } catch (error) {
    next(error);
  }
};
