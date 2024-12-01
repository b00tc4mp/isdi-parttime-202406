import { Errors, Validator } from "social-common";
import models from "../data/models.js";
import { Types } from "mongoose";

const { User, Post } = models;

const { ObjectId } = Types;

export default (userId, postId) => {
  Validator.id(userId);
  Validator.id(postId);

  return User.findById(userId).then((user) => {
    if (!user) throw new Errors.ExistenceError("user does not exist");
    return Post.findById(postId).then((post) => {
      if (!post) throw new Errors.ExistenceError("user does not exist");
      const index = post.likes.indexOf(new ObjectId(userId));
      if (index === -1) {
        post.likes.push(new ObjectId(userId));
      } else {
        post.likes.splice(index, 1);
      }
      post.save();
    });
  });
};
