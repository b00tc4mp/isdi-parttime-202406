import { Validator, Errors } from "common";
import models from "../data/models.js";

const { User } = models;

/**
 * Obtiene el nombre de usuario mediante el token de autenticación.
 * @param {string} token - Token JWT del usuario autenticado.
 * @returns {Promise<string>} - El nombre de usuario asociado al token.
 */

export default (id) => {
  Validator.id(id);

  return User.findById(id)
    .lean()
    .then((user) => {
      if (!user) throw new Errors.AuthError("User id doesn't belong to anyone");
      return user.username;
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
