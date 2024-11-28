import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User, Post } = models;

export default (id) => {
  Validator.id(id);

  return User.findById(id).then((user) => {
    if (!user) throw new Errors.ExistenceError("user does not exist");
    return Post.find(
      { visibility: "public" },
      "author content likes images createdAt"
    )
      .populate("author", "username avatar")
      .sort({ createdAt: -1 })
      .lean()
      .then((posts) => {
        return posts.map((post) => {
          if (post.likes.length > 0)
            post.isLiked = post.likes.some(
              (userId) => userId.toString() === id
            );
          else post.isLiked = false;

          post.author.isFollowed = user.following.some(
            (userId) => userId === post.author._id
          );

          post.author.id = post.author._id;
          delete post.author._id;
          post.id = post._id.toString();
          delete post._id;

          if (post.likes.length > 0)
            post.likes.forEach((like) => {
              delete like._id;
            });

          return post;
        });
      })
      .catch((error) => {
        throw new Errors.UnexpectedError(error.message);
      });
  });
};
