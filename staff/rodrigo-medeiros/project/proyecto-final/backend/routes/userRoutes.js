import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { updateEmail } from "../logic/user/updateEmail.js";
import { updateUsername } from "../logic/user/updateUsername.js";

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

// Rota de registro de usuário
router.post("/users", async (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;

  try {
    // Verificar se o usuário já existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email já registrado." });
    }

    // Criar o hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar novo usuário
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      dateOfBirth,
    });

    // Salvar o usuário no banco de dados
    await newUser.save();
    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar usuário." });
  }
});

// Exemplo de rota protegida com autenticação
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    // O usuário é automaticamente identificado pelo token no middleware
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter perfil do usuário." });
  }
});

// Rota de atualização do nome de usuário
router.patch("/updateusername", authMiddleware, updateUsername);

// Rota de atualização do email
router.patch("/updateemail", authMiddleware, updateEmail);

// Rota de atualização da data de nascimento
router.put("/updateDateOfBirth", authMiddleware, async (req, res) => {
  const { newDateOfBirth, password } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);

    // Verificar se a senha fornecida corresponde à senha do usuário
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Senha incorreta." });
    }

    // Atualizar a data de nascimento
    user.dateOfBirth = newDateOfBirth;
    await user.save();

    res.json({ message: "Data de nascimento atualizada com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar a data de nascimento." });
  }
});

router.patch("/user/password", authMiddleware, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);

    // Verificar se a senha atual fornecida corresponde à senha do usuário
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Senha atual incorreta." });
    }

    // Atualizar a senha
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "Senha atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar a senha." });
  }
});

// Rotas de voos favoritos
// Salvar uma rota favorita
router.post("/user/favouriteRoutes", authMiddleware, async (req, res) => {
  try {
    const { from, to, departureDate, returnDate, adults, cabinClass } =
      req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    // Verificar limite de 5 rotas favoritas
    if (user.favouriteRoutes.length >= 5) {
      return res.status(400).json({ message: "Limite de 5 rotas atingido." });
    }

    // Adicionar nova rota
    user.favouriteRoutes.push({
      from,
      to,
      departureDate,
      returnDate,
      adults,
      cabinClass,
    });
    await user.save();

    res.status(201).json(user.favouriteRoutes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar a rota.", error });
  }
});

// Buscar as rotas favoritas do usuário
router.get("/user/favouriteRoutes", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
    res.json(user.favouriteRoutes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar rotas favoritas.", error });
  }
});

// Deletar uma rota favorita
router.delete(
  "/user/favouriteRoutes/:routeId",
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      user.favouriteRoutes = user.favouriteRoutes.filter(
        (route) => route._id.toString() !== req.params.routeId
      );
      await user.save();

      res.json({
        message: "Rota removida com sucesso.",
        favouriteRoutes: user.favouriteRoutes,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao remover rota favorita.", error });
    }
  }
);

export default router;
