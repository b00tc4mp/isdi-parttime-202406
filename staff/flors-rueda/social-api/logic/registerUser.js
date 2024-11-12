import storage from '../db/sync-storage.js'
import { Validator, Errors } from 'social-common'

export default (username, dateOfBirth, email, password) => {
    Validator.username(username);
    Validator.dateOfBirth(dateOfBirth);
    Validator.email(email);
    Validator.password(password);


    const userNameDuplicated = storage.users.some((user) => user.username === username);
    if (userNameDuplicated) throw new Errors.DuplicityError("Username already in use");
    // throw new Errors.DuplicationError("Username already in use");

    const userEmailDuplicated = storage.users.some((user) => user.email === email);
    if (userEmailDuplicated) throw new Errors.DuplicityError("Email already in use");

    const user = {
        id: Date.now(),
        username,
        dateOfBirth,
        email,
        password
    }

    storage.users = user;

}