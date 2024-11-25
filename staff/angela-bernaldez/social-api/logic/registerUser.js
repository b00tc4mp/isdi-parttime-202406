import storage from '../data/async-storage.js';
import { Validator, Errors } from 'social-common';
import bcrypt from 'bcrypt';
import data from '../data/index.js';

export default (username, dateOfBirth, email, password) => {

    Validator.username(username)
    Validator.dateOfBirth(dateOfBirth)
    Validator.email(email)
    Validator.password(password)

    return data.users.findOne({ username: username })
    .then((user) => {
        if (user) throw new Errors.DuplicityError("Username already in use");
        data.users.findOne({ email: email })
            .then((user) => {
                if (user) throw new Errors.DuplicityError("Email already in use");
                return bcrypt.hash(password, 15)
                    .then((cryptPassword) => {
                        const user = {
                            username,
                            dateOfBirth,
                            email,
                            password: cryptPassword
                        }
                        return data.users.insertOne(user);
                        })
                    })
                    .catch((error) => { throw new Errors.UnexpectedError(error.message) })
        })
}