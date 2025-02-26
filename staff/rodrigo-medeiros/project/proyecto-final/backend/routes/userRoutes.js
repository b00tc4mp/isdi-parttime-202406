import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

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

export default router;
