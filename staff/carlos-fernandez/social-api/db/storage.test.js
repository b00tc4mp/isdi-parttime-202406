import storage from "./storage.js";

const fakeStorage = { users: [] };

console.log(storage.users);
console.log(fakeStorage.users);

storage.users = "hola";
fakeStorage.users = "hola";

console.log(storage.users);
console.log(fakeStorage.users);
