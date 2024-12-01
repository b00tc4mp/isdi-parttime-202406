import logic from "../logic/index.js";

export default (req, res, next) => {
  const userId = req.id;
  const postId = req.params.id;
  const { comment } = req.body;

  try {
    logic
      .createComment(userId, postId, comment)
      .then(() => res.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
