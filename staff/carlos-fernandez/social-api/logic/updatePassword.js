import { Errors, Validator } from "social-common";
import bcrypt from "bcrypt";
import models from "../data/models.js";

const { User } = models;

export default (id, newPassword, oldPassword) => {
  Validator.id(id);
  Validator.password(newPassword);
  Validator.password(oldPassword);

  return User.findById(id).then((user) => {
    if (!user) throw new Errors.ExistenceError("No user with this email");

    return bcrypt
      .compare(oldPassword, user.password)
      .then((isPasswordValid) => {
        if (!isPasswordValid)
          throw new Errors.CredentialsError("Wrong Password");

        return bcrypt
          .hash(newPassword, 15)
          .then((cryptPassword) => {
            return User.findByIdAndUpdate(id, { password: cryptPassword });
          })
          .catch((error) => {
            throw new Errors.UnexpectedError(error.message);
          });
      });
  });
};
