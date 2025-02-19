import logic from "../logic/index.js";

export default (req, res, next) => {
  const { dogs, startDate, endDate } = req.body;
  const userId = req.id;
  console.log("REQ.ID EN EL HANDLER----:", userId);

  try {
    const bookingData = {
      userId,
      dogs,
      startDate,
      endDate,
    };

    console.log("Datos que se enviarán a la lógica:", bookingData);

    logic
      .createBooking(bookingData)
      .then(() => res.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
