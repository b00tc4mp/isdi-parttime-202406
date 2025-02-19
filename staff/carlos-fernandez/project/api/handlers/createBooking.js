import logic from "../logic/index.js";

export default (req, res, next) => {
  const { dogId, startDate, endDate } = req.body.bookingData;
  const userId = req.id;

  try {
    const bookingData = {
      dogId,
      startDate,
      endDate,
    };
    logic
      .createBooking(userId, bookingData)
      .then(() => res.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
