import { Errors } from "social-common";
import storage from '../db/sync-storage.js'

export default (idLogged, idRequested) => {
    const users = storage.users

    const userLogged = users.some((user) => user.id === idLogged)
    if (!userLogged) throw new Errors.AuthError("User id don't belong to anyone")

    const userRequested = users.filter((user) => user.id === idRequested)[0]
    if (!userRequested) throw new Errors.ExistenceError("User not found")

    return { username: userRequested.username, email: userRequested.email }
}

