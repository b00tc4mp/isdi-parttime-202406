import { ObjectId } from "mongodb"
import data from "../data/index.js"
import { Errors, Validator } from "social-common"
import models from "../data/models.js"

const { User, Post } = models;

export default (id) => {
    //validar id, validar texto contento
    Validator.id(id)

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.ExistenceError('user does not exist')
            return Post.find({ visibility: "public" }, 'author content likes images createdAt').lean()
                .then(posts => {
                    return posts
                })
        })
                .catch(error => { throw new Errors.UnexpectedError(error.message) })
}