import { Validator, Errors } from "common";
import bcrypt from "bcrypt";
import models from "../data/models.js";

const { User } = models;

export default (email, password) => {
  Validator.email(email);
  Validator.password(password);

  return User.findOne({ email: email }).then((user) => {
    if (!user) throw new Errors.CredentialsError("No user with this email");
    return bcrypt
      .compare(password, user.password)
      .then((isPasswordValid) => {
        if (!isPasswordValid)
          throw new Errors.PasswordNotValidError("Wrong password");
        return user._id.toString();
      })
      .catch((error) => {
        throw new Errors.UnexpectedError(error.message);
      });
  });
};
