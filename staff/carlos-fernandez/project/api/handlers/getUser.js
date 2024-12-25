import logic from "../logic/index.js";

export default (req, res, next) => {
  const { username } = req.params;

  const id = req.id;

  try {
    logic
      .getUser(id, username)
      .then((requestedUser) => res.status(200).send({ user: requestedUser }))
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
