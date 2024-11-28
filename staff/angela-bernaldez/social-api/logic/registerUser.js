import { Validator, Errors } from 'social-common'
import bcrypt from 'bcrypt'
import models from '../data/models.js'

const { User } = models

export default (username, dateOfBirth, email, password) => {

    Validator.username(username)
    Validator.dateOfBirth(dateOfBirth)
    Validator.email(email)
    Validator.password(password)

    return User.findOne({ username: username })
    .then((user) => {
        if (user) throw new Errors.DuplicityError("Username already in use");
        User.findOne({ email: email })
            .then((user) => {
                if (user) throw new Errors.DuplicityError("Email already in use");
                return bcrypt.hash(password, 15)
                    .then((cryptPassword) => {
                        const user = {
                            username,
                            dateOfBirth: new Date(dateOfBirth),
                            email,
                            password: cryptPassword
                        }
                        return User.create(user);
                        })
                    })
                    .catch((error) => { throw new Errors.UnexpectedError(error.message) })
        })
}