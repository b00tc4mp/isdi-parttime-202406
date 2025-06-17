// backend/handlers/user/handlerGetFavouriteRoutes.js
import { getFavouriteRoutesService } from "../../logic/user/getFavouriteRoutes.js";
import { NotFoundError, ServerError } from "../../tools/errors.js";

/**
 * Handler Express para listar as rotas favoritas de um usuário.
 */
export async function handlerGetFavouriteRoutes(req, res) {
  try {
    const userId = req.user.id;
    const routes = await getFavouriteRoutesService(userId);
    return res.status(200).json(routes);
  } catch (err) {
    if (err instanceof NotFoundError) {
      return res.status(404).json({ message: err.message });
    }
    console.error("Erro em handlerGetFavouriteRoutes:", err);
    return res
      .status(500)
      .json({ message: err.message || "Error fetching favourite routes." });
  }
}
