import { Validator, Errors } from "common";
import models from "../data/models.js";

const { User } = models;

/**
 * Obtiene los datos del usuario mediante el token de autenticación.
 * @param {string} token - Token JWT del usuario autenticado.
 * @returns {Promise<object>} - El usuario asociado al token.
 */

export default (id) => {
  Validator.id(id);

  return User.findById(id)
    .lean()
    .then((user) => {
      if (!user) {
        throw new Errors.AuthError(
          "The provided user ID does not correspond to any user"
        );
      }
      user.id = user._id.toString();
      delete user._id;
      delete user.__v;
      delete user.password;
      return user;
    })
    .catch((error) => {
      if (error instanceof Errors.AuthError) {
        throw error;
      }
      throw new Errors.UnexpectedError(error.message);
    });
};
