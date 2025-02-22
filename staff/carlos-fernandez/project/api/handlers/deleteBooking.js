import logic from "../logic/index.js";

export default (req, res, next) => {
  const { bookingId, dogs } = req.body;
  const userId = req.id;

  try {
    const bookingData = {
      userId,
      bookingId,
      dogs,
    };

    logic
      .deleteBooking(bookingData)
      .then(() => res.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
