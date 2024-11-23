import storage from '../db/sync-storage.js'

export default (id) => {
    const users = storage.users

    const userExists = users.some((user) => user.id === id)
    if (!userExists) throw new Error("User doesn´t exist")

    const cleanUsers = users.map((user) => {
        return { username: user.username, email: user.email }
    })

    console.log(cleanUsers)

    console.log('todo bien')
    return cleanUsers
}



