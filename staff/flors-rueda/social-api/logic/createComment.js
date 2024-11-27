import { Errors, Validator } from "social-common";
import models from "../data/models.js";
import { Types } from "mongoose";

const { User, Post } = models;

const { ObjectId } = Types;

export default (userId, postId, comment) => {
    Validator.id(userId);
    Validator.id(postId);

    return User.findById(userId).then((user) => {
        if (!user) throw new Errors.ExistenceError('user does not exist');
        return Post.findById(postId).then((post) => {
            if (!post) throw new Errors.ExistenceError('user does not exist');
            post.comments.push({
                author: new ObjectId(userId),
                comment: comment,
            })
            post.save();
        }).catch((error) => { throw new Errors.UnexpectedError(error.message) })
    })
}