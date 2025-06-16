import { ObjectId } from "mongodb"
import data from "../data/index.js"
import { Errors } from "social-common"

export default (id, content) => {
    //validar id, validar texto contento;

    return data.users.findOne({ _id: new ObjectId(id) })
        .then((user) => {
            if (!user) throw new Errors.ExistenceError('user does not exist');
            data.posts.insertOne({
                author: user._id,
                content: content,
                publicationDate: new Date(),
            })
        })
        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
}