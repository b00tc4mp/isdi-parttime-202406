import User from "../../models/User.js";
import bcrypt from "bcrypt";

// Função para criar o usuário
export const registerUser = async (username, email, password, dateOfBirth) => {
  // Verificar se o usuário já existe
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("Email already registered");
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
  return;
};
