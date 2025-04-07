import User from "../../models/User.js";
import Validator from "../../tools/validator.js";
import { BadRequestError, ServerError } from "../../tools/errors.js";

export const updateDateOfBirth = async (req, res) => {
  console.log("🚀 Requisição recebida para atualizar data de nascimento!");
  try {
    const { dateOfBirth, password } = req.body;
    const userId = req.user?.id;

    if (!dateOfBirth || !password) {
      throw new BadRequestError("Date of birth and password are required");
    }
    if (!userId) throw new BadRequestError("User ID not found in request");

    Validator.dateOfBirth(dateOfBirth); // Validação da data de nascimento

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

    // Atualizando a data de nascimento
    user.dateOfBirth = dateOfBirth;
    await user.save();

    res.status(200).json({ message: "Date of birth atualizado com sucesso!" });
  } catch (error) {
    const status = error instanceof BadRequestError ? 400 : 500;
    res
      .status(status)
      .json({
        message: error.message || "Erro ao atualizar data de nascimento.",
      });
  }
};
