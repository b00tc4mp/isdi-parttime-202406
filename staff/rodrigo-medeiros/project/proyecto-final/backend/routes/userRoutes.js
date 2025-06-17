import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { updateEmail } from "../logic/user/updateEmail.js";
import { updateUsername } from "../logic/user/updateUsername.js";
import { updateDateOfBirth } from "../logic/user/updateDateOfBirth.js";
import { updatePassword } from "../logic/user/updatePassword.js";
import { forgotPassword } from "../logic/user/forgotPassword.js";
import { handlerRegisterUser } from "../handlers/user/handlerRegisterUser.js";
import { handlerDeleteUser } from "../handlers/user/handlerDeleteUser.js";
import { handlerAddNewFavouriteRoute } from "../handlers/user/handlerAddNewFavouriteRoute.js";
import { handlerGetFavouriteRoutes } from "../handlers/user/handlerGetFavouriteRoutes.js";
import { handlerDeleteFavouriteRoute } from "../handlers/user/handlerDeleteFavouriteRoute.js";

const router = express.Router();
// Rotas de dados do usuário
// Rota de login de usuário
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Credenciais inválidas." });
    }

    // Verificar se a senha está correta
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciais inválidas." });
    }

    // Gerar um token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Retornar o token ao cliente
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor." });
  }
});
router.post("/registerUser", handlerRegisterUser);

// Exemplo de rota protegida com autenticação
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    console.log("Rota /profile acessada"); // <-- Adicione esse log
    console.log("Usuário autenticado:", req.user); // <-- Verificar usuário autenticado

    // O usuário é automaticamente identificado pelo token no middleware
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error("Erro ao obter perfil do usuário:", error);
    res.status(500).json({ message: "Erro ao obter perfil do usuário." });
  }
});

// Rota de atualização do nome de usuário
router.patch("/updateusername", authMiddleware, updateUsername);

// Rota de atualização do email
router.patch("/updateemail", authMiddleware, updateEmail);

// Rota de atualização da data de nascimento
router.patch("/updateDateOfBirth", authMiddleware, updateDateOfBirth);

router.patch("/updatePassword", authMiddleware, updatePassword);

// Rota para redefinir senha sem e-mail (usando data de nascimento)
router.post("/forgot-password", forgotPassword);

// Rotas de voos favoritos

// Rota para deletar um usuário
router.delete("/deleteUser", authMiddleware, handlerDeleteUser);

//rotas para manejar as rotas favoritas
//adicionar novas rotas
router.post("/favouriteRoutes", authMiddleware, handlerAddNewFavouriteRoute);
//obter as rotas salvas
router.get("/favouriteRoutes", authMiddleware, handlerGetFavouriteRoutes);
//deletar uma rota
router.delete(
  "/favouriteRoutes/:routeId",
  authMiddleware,
  handlerDeleteFavouriteRoute
);

export default router;
