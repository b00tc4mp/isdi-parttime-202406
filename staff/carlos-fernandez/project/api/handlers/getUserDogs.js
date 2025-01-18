import logic from "../logic/index.js";

export default (req, res, next) => {
  const id = req.params.id || req.id;

  logic
    .getUserDogs(id)
    .then((requestedUserDogs) =>
      res.status(200).send({ dogs: requestedUserDogs })
    )
    .catch((error) => next(error)); // Manejo de errores en la promesa
};
