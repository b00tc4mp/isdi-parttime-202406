import logic from "../logic/index.js";

export default (req, res, next) => {
  const id = req.id;

  logic
    .getUserBookings(id)
    .then((bookings) => res.status(200).send({ bookings }))
    .catch((error) => next(error));
};
