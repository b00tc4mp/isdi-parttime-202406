import User from "../../models/User.js";
import Validator from "../../tools/validator.js";
import {
  BadRequestError,
  CredentialsError,
  ServerError,
  NotFoundError,
} from "../../tools/errors.js";
import bcrypt from "bcrypt";

export const updatePassword = async (req, res) => {
  console.log("🚀 Requisição recebida para atualizar senha!");
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user?.id;

    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Current and new passwords are required" });
    }

    if (!userId) {
      return res.status(400).json({ message: "User ID not found in request" });
    }

    Validator.password(newPassword); // Valida a nova senha

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verifica se a senha atual está correta
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Gerando hash da nova senha e salvando no banco
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.status(200).json({ message: "Password atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar senha:", error);

    let status = 500; // Padrão: erro interno do servidor
    if (error instanceof BadRequestError) status = 400;
    if (error instanceof NotFoundError) status = 404;
    if (error instanceof CredentialsError) status = 401;

    res
      .status(status)
      .json({ message: error.message || "Erro ao atualizar senha." });
  }
};
