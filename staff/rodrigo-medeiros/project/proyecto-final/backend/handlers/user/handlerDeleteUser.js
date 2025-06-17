import { deleteUserService } from "../../logic/user/deleteUserService.js";
import {
  NotFoundError,
  CredentialsError,
  ServerError,
} from "../../tools/errors.js";

/**
 * Handler Express para exclusão de conta de usuário.
 * Recebe senha via req.body, ID via req.user, e devolve JSON com status adequado.
 */
export async function handlerDeleteUser(req, res) {
  try {
    const userId = req.user.id;
    const { password } = req.body;

    const result = await deleteUserService(userId, password);
    return res.status(200).json(result);
  } catch (err) {
    if (err instanceof NotFoundError) {
      return res.status(404).json({ message: err.message });
    }
    if (err instanceof CredentialsError) {
      return res.status(401).json({ message: err.message });
    }
    if (err instanceof ServerError) {
      return res.status(500).json({ message: err.message });
    }
    // erro não previsto
    console.error("Erro em handlerDeleteUser:", err);
    return res.status(500).json({ message: "Server error." });
  }
}
