import fs from 'fs'
import fs from 'fs/promises'


export default {
    getUsers() {
        return fs.readFile('./db/users.json')
        .then(data => JSON.parse(data))
        .catch(error => {
            console.log('Error reading users:', error)
            throw error
        })
    },
    addUser(user) {
        return fs.readFile('./db/users.json')
        .then(data => {
            const users = JSON.parse(data)
            users.push(user)
            return fs.writeFile('./db/users.json', JSON.stringify(users))
            })
        .catch(error => {
            console.error('Error adding user:', error)
            throw error;
        })
    },
    saveUsers(newUsersArray) {
        return fs.writeFile('./db/users.json', JSON.stringify(newUsersArray))
        .catch(error => {
            console.error('Error saving users:', error)
            throw error;
        })
    }
}