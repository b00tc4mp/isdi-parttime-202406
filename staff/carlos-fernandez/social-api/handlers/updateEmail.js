import logic from "../logic/index.js";

export default (req, res, next) => {
  const id = req.id;
  const { email } = req.body;

  try {
    logic
      .updateEmail(id, email)
      .then(() => {
        res.status(200).send();
      })
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
