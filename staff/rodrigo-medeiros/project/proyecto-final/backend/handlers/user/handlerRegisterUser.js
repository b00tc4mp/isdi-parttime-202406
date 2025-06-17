import Validator from "../../tools/validator.js";
import { BadRequestError, ServerError } from "../../tools/errors.js";
import { registerUser } from "../../logic/user/registerUser.js";

// Função para criar o usuário
export const handlerRegisterUser = async (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;

  try {
    // Verificar se todos os campos estão presentes
    if (!username || !email || !password || !dateOfBirth) {
      throw new BadRequestError("Todos os campos são obrigatórios.");
    }

    // Verificar se o email é válido
    Validator.email(email); // validar os outros campos
    await registerUser(username, email, password, dateOfBirth);

    res.status(201).json({ message: "User registered succesfully" });
  } catch (error) {
    const status = error instanceof BadRequestError ? 400 : 500; // meter un existence error or duplicity
    res
      .status(status)
      .json({ message: error.message || "Erro ao registrar usuário." });
  }
};
