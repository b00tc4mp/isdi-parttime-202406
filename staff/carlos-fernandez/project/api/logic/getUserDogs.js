import { Validator, Errors } from "common";
import models from "../data/models.js";

const { User } = models;

/**
 * Obtiene los perros asociados a un usuario mediante su ID.
 * @param {string} id - ID del usuario.
 * @returns {Promise<Array>} - Lista de perros asociados al usuario.
 */

export default (id) => {
  Validator.id(id);

  // Buscamos al usuario por el id
  return User.findById(id)
    .populate("dogs") // Trae perros asociados
    .lean()
    .then((user) => {
      if (!user) throw new Errors.NotFoundError("User not found");
      if (!user.dogs) throw new Errors.NotFoundError("Dogs not found");

      return user.dogs; //Devuelve la lista de perros
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
