// backend/logic/user/DeleteFavouriteRoute.js
import User from "../../models/User.js";
import { BadRequestError, NotFoundError } from "../../tools/errors.js";
import { isValidObjectId } from "mongoose";

/**
 * Regra de negócio para remover uma rota favorita.
 *
 * @param {string} userId
 * @param {string} routeId
 * @returns {Array} Lista atualizada de favouriteRoutes
 * @throws {BadRequestError} se routeId inválido
 * @throws {NotFoundError} se usuário ou rota não existir
 */
export async function deleteFavouriteRoute(userId, routeId) {
  if (!isValidObjectId(routeId)) {
    throw new BadRequestError("Invalid route ID.");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found.");
  }

  const initialLength = user.favouriteRoutes.length;
  user.favouriteRoutes = user.favouriteRoutes.filter(
    (route) => route._id.toString() !== routeId
  );

  if (user.favouriteRoutes.length === initialLength) {
    throw new NotFoundError("Favourite route not found.");
  }

  await user.save();
  return user.favouriteRoutes;
}
