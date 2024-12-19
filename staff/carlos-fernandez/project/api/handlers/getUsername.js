import logic from "../logic/index.js";

export default (req, res, next) => {
  const id = req.id;
  console.log(id);
  try {
    logic
      .getUsername(id)
      .then((requestedUsername) =>
        res.status(200).send({ username: requestedUsername })
      )
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
