// getFavouriteRoutes.js
import User from "../../models/User.js";

export const getFavouriteRoutes = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" }); // 🔥 Removido ponto final
    }
    res.status(200).json(user.favouriteRoutes); // ✅ Agora define status 200 corretamente
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching favourite routes.", error });
  }
};
