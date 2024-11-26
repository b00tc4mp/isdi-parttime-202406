import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User } = models;

export default (id, newEmail) => {
  //Validaciones
  Validator.email(newEmail);
  Validator.id(id);

  return (
    User
      // new: true => para que devuelva el documento actualizado
      .findByIdAndUpdate(id, { email: newEmail }, { new: true })
      .then((updatedUser) => {
        if (!updatedUser) {
          throw new Errors.AuthError("User id doesn't belong to anyone");
        }
      })
      .catch((error) => {
        throw new Errors.UnexpectedError(error.message);
      })
  );
};
