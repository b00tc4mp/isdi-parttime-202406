// backend/handler/user/handlerAddNewFavouriteRoute.js
import { BadRequestError, NotFoundError } from "../../tools/errors.js";
import { AddNewFavouriteRoute } from "../../logic/user/addNewFavouriteRoute.js";

/**
 * Handler para POST /api/user/favouriteRoutes
 */
export async function handlerAddNewFavouriteRoute(req, res) {
  const userId = req.user.id;
  const { from, to, departureDate, returnDate, adults, children, cabinClass } =
    req.body;

  try {
    if (!from || !to || !departureDate || adults == null || !cabinClass) {
      throw new BadRequestError("Missing required route fields.");
    }

    const updatedRoutes = await AddNewFavouriteRoute(userId, {
      from,
      to,
      departureDate,
      returnDate,
      adults,
      children,
      cabinClass,
    });

    res.status(201).json({ favouriteRoutes: updatedRoutes });
  } catch (err) {
    if (err instanceof BadRequestError) {
      return res.status(400).json({ message: err.message });
    }
    if (err instanceof NotFoundError) {
      return res.status(404).json({ message: err.message });
    }
    console.error("handlerAddNewFavouriteRoute error:", err);
    res.status(500).json({ message: "Error saving favourite route." });
  }
}
