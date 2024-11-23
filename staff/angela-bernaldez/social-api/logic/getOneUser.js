import storage from '../db/sync-storage.js'

export default (idLogged, idRequested) => {
    const users = storage.users

    const userLogged = users.some((user) => user.id === idLogged)
    if (!userLogged) throw new Error("User doesn't exist");

    const userRequested = users.filter((user) => user.id === idRequested)[0]
    if (!userRequested) throw new Error("User not found");

    return { username: userRequested.username, email: userRequested.email }
}

