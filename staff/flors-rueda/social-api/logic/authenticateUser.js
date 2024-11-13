import storage from "../db/async-storage.js";
import { Validator, Errors } from "social-common";
import bcrypt from "bcrypt";

export default (email, password) => {
    Validator.email(email);
    Validator.password(password);

    return storage.getUsers()
        .then((users) => {
            const userIndex = users.findIndex(user => user.email === email);
            if (userIndex === -1) throw new Errors.ExistenceError('No user with this email');


            return bcrypt.compare(password, users[userIndex].password)
                .then((isPasswordValid) => {

                    if (!isPasswordValid) throw new Errors.CredentialsError('Wrong Password');

                    return users[userIndex].id
                }).catch((error) => { throw new Errors.UnexpectedError(error.message) })
        })

}