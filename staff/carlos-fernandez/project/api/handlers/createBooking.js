import logic from "../logic/index.js";

export default (req, res, next) => {
  const { dogIds, startDate, endDate } = req.body;
  const userId = req.id;

  try {
    console.log("REcibido en el handler", req.body);
    const bookingData = {
      userId,
      dogs: dogIds,
      startDate,
      endDate,
    };
    logic
      .createBooking(bookingData)
      .then(() => res.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
