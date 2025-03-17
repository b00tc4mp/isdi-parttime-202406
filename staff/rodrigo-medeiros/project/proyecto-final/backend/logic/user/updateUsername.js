import User from "../../models/User.js";
import Validator from "../../tools/validator.js";
import { BadRequestError, ServerError } from "../../tools/errors.js";

export const updateUsername = async (req, res) => {
  console.log("🚀 Requisição recebida para atualizar username!");
  try {
    const { username, password } = req.body; // Adicionando password aqui
    const userId = req.user?.id;

    if (!username || !password) {
      // Verificando se ambos foram passados
      throw new BadRequestError("Username and password are required");
    }
    if (!userId) throw new BadRequestError("User ID not found in request");

    Validator.username(username); // Validação do username

    const user = await User.findById(userId);
    if (!user) {
      console.log("Usuário não encontrado!");
      return res.status(404).json({ message: "User not found" });
    }

    // Verificando a validade da senha fornecida
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Atualizando o username
    user.username = username;
    await user.save();

    res.status(200).json({ message: "Username atualizado com sucesso!" });
  } catch (error) {
    const status = error instanceof BadRequestError ? 400 : 500;
    res
      .status(status)
      .json({ message: error.message || "Erro ao atualizar username." });
  }
};
