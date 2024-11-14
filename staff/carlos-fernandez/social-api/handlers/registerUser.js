import { Errors } from "social-common";
import logic from "../logic/index.js";
// import Errors from "social-com"

export default (req, res, next) => {
  const { username, "date-of-birth": dateOfBirth, email, password } = req.body;

  try {
    logic
      .registerUser(username, dateOfBirth, email, password)
      .then(() => res.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
