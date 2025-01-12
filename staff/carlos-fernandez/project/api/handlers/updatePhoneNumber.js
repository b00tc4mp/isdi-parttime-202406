import logic from "../logic/index.js";

export default (req, res, next) => {
  const id = req.id;

  const { phoneNumber } = req.body;

  try {
    logic
      .updatePhoneNumber(id, phoneNumber)
      .then(() => res.status(200).send())
      .catch(() => next(error));
  } catch (error) {
    next(error);
  }
};
