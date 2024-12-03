import logic from "../logic/index.js";

export default (req, res, next) => {
  const userId = req.id;
  const usernameToFollow = req.params.username;

  try {
    logic
      .toggleFollow(userId, usernameToFollow)
      .then(() => res.status(200).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
