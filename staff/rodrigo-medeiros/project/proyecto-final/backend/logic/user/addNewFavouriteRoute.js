// backend/logic/user/AddNewFavouriteRoute.js
import User from "../../models/User.js";
import { BadRequestError, NotFoundError } from "../../tools/errors.js";

/**
 * Regra de negócio para adicionar uma nova rota favorita.
 * @param {string} userId
 * @param {object} routeData
 * @returns {Array} Lista atualizada de favouriteRoutes
 * @throws {NotFoundError} Se o usuário não existir
 * @throws {BadRequestError} Se já tiver 5 rotas ou rota duplicada
 */
export async function AddNewFavouriteRoute(userId, routeData) {
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found.");
  }

  if (user.favouriteRoutes.length >= 5) {
    throw new BadRequestError("Limit of 5 favourite routes reached.");
  }

  const isDuplicate = user.favouriteRoutes.some(
    (r) =>
      r.from.iata_code === routeData.from.iata_code &&
      r.to.iata_code === routeData.to.iata_code &&
      r.departureDate === routeData.departureDate &&
      (r.returnDate || "") === (routeData.returnDate || "")
  );
  if (isDuplicate) {
    throw new BadRequestError("This favourite route already exists.");
  }

  user.favouriteRoutes.push(routeData);
  await user.save();

  return user.favouriteRoutes;
}
