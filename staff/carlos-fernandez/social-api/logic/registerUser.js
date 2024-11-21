import storage from "../data/async-storage.js";
import { Validator, Errors } from "social-common";
import bcrypt from "bcrypt";

export default (username, dateOfBirth, email, password) => {
  Validator.username(username);
  Validator.dateOfBirth(dateOfBirth);
  Validator.email(email);
  Validator.password(password);

  return storage.getUsers().then((users) => {
    if (users.some((user) => user.username === username)) {
      throw new Errors.DuplicityError("Username already in use");
    }
    if (users.some((user) => user.email === email)) {
      throw new Errors.DuplicityError("Email already in use");
    }

    // Se procesa 15 veces
    return bcrypt
      .hash(password, 15)
      .then((cryptPassword) => {
        const user = {
          id: Date.now(),
          username,
          dateOfBirth,
          email,
          password: cryptPassword,
        };

        return storage.addUser(user);
      })
      .catch((error) => {
        throw new Errors.UnexpectedError(error.message);
      });
  });
};
