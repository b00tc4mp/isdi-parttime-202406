import logic from "../logic/index.js";

export default (req, res, next) => {
  const { bookingId, dogIds } = req.body;
  const userId = req.id;

  try {
    logic
      .removeDogsFromBookings({ bookingId, userId, dogIds })
      .then(() => res.status(200).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
