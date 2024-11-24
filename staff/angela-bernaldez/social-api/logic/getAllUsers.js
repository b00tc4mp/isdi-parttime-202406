import { Errors } from "social-common";
import storage from '../db/sync-storage.js'

export default (id) => {
    const users = storage.users

    const userExists = users.some((user) => user.id === id)
    if (!userExists) throw new Errors.AuthError("User id don't belong to anyone")

    const cleanUsers = users.map((user) => {
        return { username: user.username, dateOfBirth: user.dateOfBirth }
    })

    return cleanUsers
}



