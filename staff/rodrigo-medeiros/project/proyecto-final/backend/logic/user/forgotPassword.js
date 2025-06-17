// backend/logic/user/forgotPassword.js
import User from "../../models/User.js";
import Validator from "../../tools/validator.js";
import {
  BadRequestError,
  CredentialsError,
  ServerError,
  NotFoundError,
} from "../../tools/errors.js";
import bcrypt from "bcrypt";

export const forgotPassword = async (req, res) => {
  console.log("🔐 Requisição recebida para redefinir senha (sem e-mail)");
  try {
    const { email, dateOfBirth, newPassword } = req.body;

    if (!email || !dateOfBirth || !newPassword) {
      throw new BadRequestError(
        "Email, date of birth, and new password are required."
      );
    }

    Validator.password(newPassword); // Valida a nova senha

    const user = await User.findOne({ email });
    if (!user) {
      throw new NotFoundError("User not found.");
    }

    if (user.dateOfBirth !== dateOfBirth) {
      throw new CredentialsError("Date of birth does not match our records.");
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.status(200).json({ message: "Password successfully updated." });
  } catch (error) {
    console.error("❌ Error in forgotPassword:", error);

    let status = 500;
    if (error instanceof BadRequestError) status = 400;
    if (error instanceof NotFoundError) status = 404;
    if (error instanceof CredentialsError) status = 401;

    res.status(status).json({
      message:
        error.message || "An error occurred while resetting the password.",
    });
  }
};
