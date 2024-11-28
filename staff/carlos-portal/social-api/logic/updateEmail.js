import { Errors, Validator } from "social-common";
import storage from "../data/sync-storage.js"

export default (id, newEmail) => {
    Validator.email(newEmail);

    const users = storage.users;

    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Errors.AuthError("User id don't belong to anyone");

    users[userIndex].email = newEmail



    storage.saveUsers(users);
}