import logic from "../logic/index.js";

export default (req, res, next) => {
  const id = req.id;

  const { "old-password": oldPassword, "new-password": newPassword } = req.body;

  try {
    logic
      .updatePassword(id, newPassword, oldPassword)
      .then(() => res.status(200).send())
      .catch(() => next(error));
  } catch (error) {
    next(error);
  }
};
