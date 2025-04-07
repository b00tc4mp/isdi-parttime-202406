import User from "../../models/User.js";
import bcrypt from "bcrypt";
import Validator from "../../tools/validator.js";
import { BadRequestError, ServerError } from "../../tools/errors.js";

// Função para criar o usuário
export const registerUser = async (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;

  try {
    // Verificar se todos os campos estão presentes
    if (!username || !email || !password || !dateOfBirth) {
      throw new BadRequestError("Todos os campos são obrigatórios.");
    }

    // Verificar se o email é válido
    Validator.email(email);

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
    const status = error instanceof BadRequestError ? 400 : 500;
    res
      .status(status)
      .json({ message: error.message || "Erro ao registrar usuário." });
  }
};
