import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User, Post } = models;

export default (id, postId) => {
    Validator.id(id);

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone");
            return Post.findById(postId)
                .then((post) => {
                    if (!post) throw new Errors.ExistenceError("Post does not exist")
                    if (post.author.toString() !== id) throw new Errors.AuthError("Can not delete not owned post")
                    return Post.findByIdAndDelete(postId)
                })
        })
}