import { Errors, Validator } from "social-common";
import bcrypt from "bcrypt";
import models from "../data/models.js";

const { User } = models;

export default (id, newPassword, oldPassword) => {
  Validator.id(id);
  Validator.password(newPassword);
  Validator.password(oldPassword);

  return User.findById(id).then((user) => {
    // Si usuario no existe
    if (!user)
      throw new Errors.ExistenceError("User id doesn't belong to anyone");

    // Verificar la contraseña actual
    return bcrypt.compare(oldPassword, user.password).then((isMatch) => {
      if (!isMatch)
        throw new Errors.CredentialsError("Old password is incorrect");

      // Hashear la nueva contraseña
      return bcrypt
        .hash(newPassword, 10)
        .then((hashedPassword) => {
          // Actualizar la contraseña en la base de datos
          return User.findByIdAndUpdate(id, { password: hashedPassword });
        })
        .catch((error) => {
          throw new Errors.UnexpectedError(error.message);
        });
    });
  });
};
