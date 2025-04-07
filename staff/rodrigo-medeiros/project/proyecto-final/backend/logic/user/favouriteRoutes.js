//favouriteRoutes.js
import User from "../../models/User.js";

export const addToFavourites = async (req, res) => {
  const { from, to, departureDate, returnDate, adults, children, cabinClass } =
    req.body;
  const userId = req.user.id; // Supondo que você tenha um middleware de autenticação

  try {
    const user = await User.findById(userId);
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });

    const newRoute = new FavouriteRoute({
      from,
      to,
      departureDate,
      returnDate,
      adults,
      children,
      cabinClass,
      userId,
    });
    await newFavouriteRoute.save();

    res.status(201).json({ message: "Rota salva com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar a rota." });
  }
};
