import { Errors, Validator } from "social-common"
import models from "../data/models.js"

const { User, Post } = models;

export default (id) => {
    Validator.id(id);

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.ExistenceError('user does not exist');
            return Post.find({ visibility: "public" }, 'author content likes images createdAt').sort({ createdAt: -1 }).lean()
                .then(posts => {
                    return posts.map(post => {
                        post.id = post._id.toString();
                        delete post._id;
                        return post;
                    })
                })
                .catch(error => { throw new Errors.UnexpectedError(error.message) })
        })
}