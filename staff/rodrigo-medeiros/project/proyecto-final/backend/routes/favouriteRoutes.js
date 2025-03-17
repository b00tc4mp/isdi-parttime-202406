//import express from "express";
//import FavouriteRoute from "../models/FavouriteRoute.js";
//import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Salvar uma rota favorita
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { from, to, departureDate, returnDate, adults, cabinClass } =
      req.body;
    const userId = req.user.id;

    // Verificar se o usuário já tem 5 rotas salvas
    const userRoutes = await FavouriteRoute.find({ userId });
    if (userRoutes.length >= 5) {
      return res.status(400).json({ message: "Limite de 5 rotas atingido." });
    }

    const newRoute = new FavouriteRoute({
      userId,
      from,
      to,
      departureDate,
      returnDate,
      adults,
      cabinClass,
    });
    await newRoute.save();

    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar a rota.", error });
  }
});

// Buscar as rotas favoritas do usuário
router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const routes = await FavouriteRoute.find({ userId: req.user.id });
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar rotas.", error });
  }
});

// Deletar uma rota favorita
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await FavouriteRoute.findByIdAndDelete(req.params.id);
    res.json({ message: "Rota removida com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover rota.", error });
  }
});

export default router;
