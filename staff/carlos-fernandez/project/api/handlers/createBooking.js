import logic from "../logic/index.js";

export default (req, res, next) => {
  const { dogs, startDate, endDate } = req.body;
  const userId = req.id;

  console.log("Cuerpo de la petición", req.body);
  try {
    logic
      .createBooking(userId, { dogs, startDate, endDate })
      .then(() => res.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
