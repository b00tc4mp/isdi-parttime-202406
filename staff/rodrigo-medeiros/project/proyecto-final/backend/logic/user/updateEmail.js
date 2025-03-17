import User from "../../models/User.js";
import Validator from "../../tools/validator.js";
import {
  EmailNotValidError,
  BadRequestError,
  ServerError,
} from "../../tools/errors.js";

export const updateEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userId = req.user.id;

    if (!email || !password) {
      throw new BadRequestError("Email and password are required");
    }

    Validator.email(email);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await user.comparePassword(password);
    console.log("Senha válida?", isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    user.email = email;
    await user.save();

    res.status(200).json({ message: "Email atualizado com sucesso!" });
  } catch (error) {
    const status =
      error instanceof BadRequestError || error instanceof EmailNotValidError
        ? 400
        : 500;

    res
      .status(status)
      .json({ message: error.message || "Erro ao atualizar email." });
  }
};
