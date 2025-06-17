import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import {
  NotFoundError,
  CredentialsError,
  ServerError,
} from "../../tools/errors.js";

/**
 * Regra de negócio para excluir um usuário.
 * @param {string} userId   — ID do usuário a ser excluído
 * @param {string} password — senha enviada pelo usuário para confirmação
 * @returns {{ message: string }}  — objeto com mensagem de sucesso
 * @throws {NotFoundError}     — se o usuário não for encontrado
 * @throws {CredentialsError}  — se a senha estiver incorreta
 * @throws {ServerError}       — em caso de falha inesperada no banco
 */
export async function deleteUserService(userId, password) {
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found.");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new CredentialsError("Incorrect password.");
  }

  try {
    await User.findByIdAndDelete(userId);
    return { message: "Account successfully deleted." };
  } catch (err) {
    throw new ServerError("Failed to delete user.");
  }
}
