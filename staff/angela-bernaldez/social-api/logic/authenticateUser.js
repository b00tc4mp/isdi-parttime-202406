import { Validator, Errors } from "social-common"
import bcrypt from "bcrypt"
import models from "../data/models.js"

const { User } = models

export default (email, password) => {
    Validator.email(email)
    Validator.password(password)

    console.log('auth', 11)
    return User.findOne({ email: email })
    .then((user) => {
        console.log('auth', 14)
        if (!user) throw new Errors.ExistenceError('No user with this email');
        return bcrypt.compare(password, user.password)
            .then((isPasswordValid) => {
                console.log('auth', 18)

                if (!isPasswordValid) throw new Errors.CredentialsError('Wrong Password');

                return (user._id).toString()
            }).catch((error) => { throw new Errors.UnexpectedError(error.message) }) 
        })
}