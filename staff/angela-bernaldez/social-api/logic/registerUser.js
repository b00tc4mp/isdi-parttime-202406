import storage from '../db/async-storage.js'
import { Validator, Errors } from 'social-common'

export default (username, dateOfBirth, email, password) => {

    Validator.username(username)
    Validator.dateOfBirth(dateOfBirth)
    Validator.email(email)
    Validator.password(password)

    return storage.getUsers()
        .then(users => {
            if (users.some(user => user.username === username)) {
                throw new Errors.DuplicityError("Username already in use")
            }
            if (users.some(user => user.email === email)) {
                throw new Errors.DuplicityError("Email already in use")
            }
            const user = {
                id: Date.now(),
                username,
                dateOfBirth,
                email,
                password
            }
            return storage.addUser(user);
        })
}