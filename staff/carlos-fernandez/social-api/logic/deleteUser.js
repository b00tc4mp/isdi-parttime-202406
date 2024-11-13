import { Errors, Validator } from "social-common";
import storage from "../db/sync-storage.js";

export default (id, password) => {
  Validator.password(password);

  const users = storage.users;

  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1)
    throw new Errors.AuthError("User id don't belong to anyone");
  if (users[userIndex].password !== password)
    throw new Errors.CredentialsError("Wrong credentials");

  users.splice(userIndex, 1);

  storage.saveUsers(users);
};
