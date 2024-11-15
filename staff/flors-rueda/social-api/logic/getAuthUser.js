import { Errors } from "social-common";
import storage from "../db/sync-storage.js";

export default (id) => {
    const users = storage.users;

    const userRequested = users.filter((user) => user.id === id)[0];
    if (!userLogged) throw new Errors.AuthError("User id don't belong to anyone");

    return { username: userRequested.username };
};
