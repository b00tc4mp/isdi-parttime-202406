// backend/handler/user/handlerDeleteFavouriteRoute.js
import { BadRequestError, NotFoundError } from "../../tools/errors.js";
import { deleteFavouriteRoute } from "../../logic/user/deleteFavouriteRoute.js";

/**
 * Handler Express para DELETE /api/user/favouriteRoutes/:routeId
 */
export async function handlerDeleteFavouriteRoute(req, res) {
  const userId = req.user.id;
  const routeId = req.params.routeId;

  try {
    const updatedRoutes = await deleteFavouriteRoute(userId, routeId);
    return res.status(200).json({
      message: "Favourite route successfully removed.",
      favouriteRoutes: updatedRoutes,
    });
  } catch (err) {
    if (err instanceof BadRequestError) {
      return res.status(400).json({ message: err.message });
    }
    if (err instanceof NotFoundError) {
      return res.status(404).json({ message: err.message });
    }
    console.error("handlerDeleteFavouriteRoute error:", err);
    return res.status(500).json({ message: "Error removing favourite route." });
  }
}
