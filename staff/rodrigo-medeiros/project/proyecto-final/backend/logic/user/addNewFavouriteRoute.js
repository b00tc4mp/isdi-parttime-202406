import User from "../../models/User.js";

export const addNewFavouriteRoute = async (req, res) => {
  const { from, to, departureDate, returnDate, adults, children, cabinClass } =
    req.body;
  const userId = req.user.id;

  try {
    // Verifica se o usuário existe
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Verifica se o usuário já atingiu o limite de 5 rotas favoritas
    if (user.favouriteRoutes.length >= 5) {
      return res
        .status(400)
        .json({ message: "Limit of 5 favourite routes reached." });
    }

    // Cria a rota favorita com apenas iata_code e name de from e to
    const favouriteRoute = {
      from,
      to,
      departureDate,
      returnDate,
      adults,
      children,
      cabinClass,
    };

    // Adiciona a nova rota favorita
    user.favouriteRoutes.push(favouriteRoute);

    // Salva o usuário com a rota favorita adicionada
    await user.save();

    res.status(201).json(user.favouriteRoutes);
  } catch (error) {
    res.status(500).json({ message: "Error saving favourite route.", error });
  }
};
