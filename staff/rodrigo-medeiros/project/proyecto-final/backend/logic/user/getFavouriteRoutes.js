// backend/logic/user/getFavouriteRoutes.js
import User from "../../models/User.js";
import { NotFoundError, ServerError } from "../../tools/errors.js";

/**
 * Regra de negócio para obter as rotas favoritas de um usuário.
 * @param {string} userId — ID do usuário
 * @returns {Array} favouriteRoutes
 * @throws {NotFoundError} se o usuário não existir
 * @throws {ServerError} em caso de falha inesperada no DB
 */
export async function getFavouriteRoutesService(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    return user.favouriteRoutes;
  } catch (err) {
    if (err instanceof NotFoundError) {
      throw err;
    }
    throw new ServerError("Error fetching favourite routes.");
  }
}
