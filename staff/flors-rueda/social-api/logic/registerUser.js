import storage from '../db/sync-storage.js'
//import Errors from 'social-common'

export default (username, dateOfBirth, email, password) => {
    //TODO validar tipo de input, regex, etc ---> si falla lanzar error

    const userNameDuplicated = storage.users.some((user) => user.username === username);
    if (userNameDuplicated) throw new Error("Username already in use");
    // throw new Errors.DuplicationError("Username already in use");

    const userEmailDuplicated = storage.users.some((user) => user.email === email);
    if (userEmailDuplicated) throw new Error("Email already in use");

    const user = {
        id: Date.now(),
        username,
        dateOfBirth,
        email,
        password
    }

    storage.users = user;

}