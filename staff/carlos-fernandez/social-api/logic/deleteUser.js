import { Errors, Validator } from "social-common";
import data from "../data/index.js";
import bcrypt from "bcrypt";

export default (id, password) => {
  Validator.password(password);

  return data.users
    .findOne({ _id: new ObjectId(id) })
    .then((user) => {
      if (!user) throw new Errors.AuthError("User id don't belong to anyone");
      return bcrypt.compare(password, user.password).then((isPasswordValid) => {
        if (!isPasswordValid)
          throw new Errors.CredentialsError("Wrong credentials");
        return data.users.deleteOne({ _id: new ObjectId(id) }).then((info) => {
          if (info.deletedCount !== 1)
            throw new Errors.UnexpectedError("Something went wrong");
          return;
        });
      });
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
