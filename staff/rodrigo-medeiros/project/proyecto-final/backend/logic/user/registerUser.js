import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Função de registro de usuário
const registerUser = async (req, res) => {
  console.log("Request Body:", req.body);
  const { username, email, password, dateOfBirth } = req.body;

  // Verificar se o usuário já existe
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email já cadastrado!" });
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criar novo usuário
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    dateOfBirth,
  });
  if (!username || !email || !password || !dateOfBirth) {
    return res.status(400).json({ message: "All fields are required." });
  }
  // Salvar no banco de dados
  try {
    await newUser.save();
    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Erro ao registrar usuário", error });
  }
};

export default registerUser;
