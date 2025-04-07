import User from "../../models/User.js";
import mongoose from "mongoose";
import { isValidObjectId } from "mongoose";

export const deleteFavouriteRoute = async (req, res) => {
  try {
    console.log("🔍 Iniciando deleteFavouriteRoute");
    console.log("📌 Usuário ID:", req.user.id);
    console.log("📌 Rota ID:", req.params.routeId);

    const user = await User.findById(req.user.id);
    if (!user) {
      console.log("❌ Usuário não encontrado");
      return res.status(404).json({ message: "User not found." });
    }

    const initialLength = user.favouriteRoutes.length;
    const routeId = req.params.routeId;

    if (!isValidObjectId(routeId)) {
      return res.status(400).json({ message: "Invalid route ID." });
    }

    console.log("📌 Rotas favoritas antes da exclusão:", user.favouriteRoutes);

    user.favouriteRoutes = user.favouriteRoutes.filter(
      (route) => !route._id.equals(routeId) // Comparação correta de ObjectId
    );

    console.log("📌 Rotas favoritas após a exclusão:", user.favouriteRoutes);

    if (user.favouriteRoutes.length === initialLength) {
      console.log("❌ Rota favorita não encontrada");
      return res.status(404).json({ message: "Favourite route not found." });
    }

    await user.save();
    console.log("✅ Rota favorita removida com sucesso!");

    return res.status(200).json({
      message: "Favourite route successfully removed.",
      favouriteRoutes: user.favouriteRoutes,
    });
  } catch (error) {
    console.error("🚨 Erro ao remover rota favorita:", error);
    return res
      .status(500)
      .json({ message: "Error removing favourite route.", error });
  }
};
