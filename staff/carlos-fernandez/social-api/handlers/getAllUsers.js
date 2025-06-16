import logic from "../logic/index.js";

export default (req, res, next) => {
  const id = req.id;

  try {
    logic
      .getAllUsers(id)
      .then((users) => {
        res.status(200).json({ users: users });
      })
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
