import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User, Post } = models;

export default (id, postId) => {
    Validator.id(id);

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone");
            return Post.findById(postId, 'content images visibility').lean()
                .then((post) => {
                    if (!post) throw new Errors.ExistenceError("Post does not exist")
                    post.id = post._id.toString();
                    delete post._id;
                    return post
                })
        })
}