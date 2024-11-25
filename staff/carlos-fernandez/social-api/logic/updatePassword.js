import { Errors, Validator } from "social-common";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export default (id, newPassword, oldPassword) => {
  Validator.password(newPassword);
  Validator.password(oldPassword);

  return User.findById(id)
    .then((user) => {
      // Si usuario no existe
      if (!user) throw new Errors.AuthError("User id doesn't belong to anyone");

      // Verificar la contraseña actual
      return bcrypt.compare(oldPassword, user.password).then((isMatch) => {
        if (!isMatch)
          throw new Errors.ValidationError("Old password is incorrect");

        // Hashear la nueva contraseña
        return bcrypt.hash(newPassword, 10).then((hashedPassword) => {
          // Actualizar la contraseña en la base de datos
          user.password = hashedPassword;
          return user.save();
        });
      });
    })
    .then(() => {
      // Confirmamos la actualización
      return { message: "Password updated successfully" };
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
