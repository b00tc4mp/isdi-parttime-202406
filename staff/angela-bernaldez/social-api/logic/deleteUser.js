import { Errors, Validator } from "social-common"
import bcrypt from "bcrypt"
import models from "../data/models.js"

const { User } = models

export default (id, password) => {
    Validator.id(id)
    Validator.password(password)

    return User.findById(id)
        .then(user => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone");
            return bcrypt.compare(password, user.password)
                .then(isPasswordValid => {
                    if (!isPasswordValid) throw new Errors.CredentialsError("Wrong credentials");
                    return User.findByIdAndDelete(id)
                        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
                })
        })
}