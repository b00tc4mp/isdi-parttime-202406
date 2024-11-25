import { Validator, Errors } from "social-common"
import bcrypt from "bcrypt"
import data from "../data/index.js"

export default (email, password) => {
    Validator.email(email)
    Validator.password(password)

    return data.users.findOne({ email: email })
    .then((user) => {
        if (!user) throw new Errors.ExistenceError('No user with this email');
        return bcrypt.compare(password, user.password)
            .then((isPasswordValid) => {

                if (!isPasswordValid) throw new Errors.CredentialsError('Wrong Password');

                return (user._id).toString()
            }).catch((error) => { throw new Errors.UnexpectedError(error.message) }) 
        })
}