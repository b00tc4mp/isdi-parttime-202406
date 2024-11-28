import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User, Post } = models;

export default (id, content, images, visibility) => {
  Validator.id(id);
  Validator.content(content);
  if (images)
    images.forEach((image) => {
      Validator.img(image);
    });
  //Validator.visibility

  return User.findById(id).then((user) => {
    if (!user) throw new Errors.ExistenceError("user does not exist");
    return Post.create({
      author: user._id,
      content: content,
      images: images ? images : [],
      visibility: visibility ? visibility : "public",
      likes: [],
    }).catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
  });
};
