import logic from "../logic/index.js";
import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const { email, password } = req.body;

  try {
    logic
      .authenticateUser(email, password)
      .then((id) => {
        /* Pasamos el id a token con un secret */
        const token = jwt.sign(
          {
            id: id.toString,
          },
          process.env.JWT_SECRET
        );

        res.status(200).send(token);
      })
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
