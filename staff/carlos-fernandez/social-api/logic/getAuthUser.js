import { Errors } from "social-common";
import storage from "../data/sync-storage";

export default (id) => {
  const users = storage.users;

  const userRequested = users.filter((user) => user.id === id)[0];
  if (!userRequested)
    throw new Errors.AuthError("User id don't belong to anyone");

  return { username: userRequested.username };
};
