import syncStorage from './sync-storage.js'
import storage from './async-storage.js'

const fakeStorage = { users: [] }

console.log(`syncStorage.users`, syncStorage.users)
console.log(`fakeStorage.users`, fakeStorage.users)

storage.users = 'hola'
fakeStorage.users = 'hola'

console.log(`syncStorage.users`, syncStorage.users)
console.log(`fakeStorage.users`, fakeStorage.users)

// testing async storage

storage.addUser('hola', (error) => {
    if (error) return console.error(error);
    return null;
});

storage.getUsers((error, users) => {
    if (error) return console.error(error);
    console.log('async-storage', users)
})