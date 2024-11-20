import { ObjectId } from "mongodb"
import data from "../data/index.js"
import { Errors } from "social-common"

export default (id) => {
    //validar id, validar texto contento;

    return data.users.findOne({ _id: new ObjectId(id) })
        .then((user) => {
            if (!user) throw new Errors.ExistenceError('user does not exist');
            data.posts.find().toArray()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString();
                        delete post._id
                        data.users.findOne({ _id: post.author })
                            .then((user) => {
                                post.author = user.username
                            })
                            .catch(error => { throw new Errors.UnexpectedError(error.message) })
                    });
                    return posts
                })
        })
        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
}