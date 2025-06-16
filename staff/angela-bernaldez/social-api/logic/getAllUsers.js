import { Errors, Validator } from "social-common"
import models from "../data/models.js"

const { User } = models

export default (id) => {
    Validator.id(id)

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone")
            return User.find({}, 'username avatar').lean()
            .then(users => {
                return users.map(user => {
                    delete user._id
                    return user
                })
            })
        })
}



