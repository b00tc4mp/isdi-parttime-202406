import { Errors, Validator } from "social-common"
import models from "../data/models.js"

const { User } = models;

export default (id, newUsername) => {
    Validator.id(id)
    Validator.username(newUsername)

    return User.findByIdAndUpdate(id, { username: newUsername })
    .then((user) => {
        if (!user) throw new Errors.AuthError("User id don't belong to anyone")
    })
}

