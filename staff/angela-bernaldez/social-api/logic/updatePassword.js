import { Errors, Validator } from "social-common";
import storage from '../db/sync-storage.js'

export default (id, newPassword, oldPassword) => {
    Validator.password(newPassword)
    Validator.password(oldPassword)

    const users = storage.users

    const userIndex = users.findIndex((user) => user.id === id)
    if (userIndex === -1) throw new Errors.AuthError("User id don't belong to anyone")
    if (users[userIndex].password !== oldPassword) throw new Errors.CredentialsError("Wrong credentials");

    users[userIndex].password = newPassword

    storage.saveUsers(users)
}