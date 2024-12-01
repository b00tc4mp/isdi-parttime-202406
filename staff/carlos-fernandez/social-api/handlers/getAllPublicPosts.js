import logic from "../logic/index.js";

export default (req, res, next) => {
  const id = req.id;

  try {
    logic
      .getAllPublicPosts(id)
      .then((posts) => {
        res.status(200).json({ posts: posts });
      })
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
