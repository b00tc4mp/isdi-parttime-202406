import logic from "../logic/index.js";

export default (req, res, next) => {
  const id = req.id;

  try {
    logic
      .getUser(id)
      .then((requestedUser) => res.status(200).send(requestedUser))
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
