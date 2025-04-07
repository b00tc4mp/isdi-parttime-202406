import User from "../../models/User.js";
import bcrypt from "bcryptjs";

export const deleteUser = async (req, res) => {
  try {
    const { password } = req.body;
    const userId = req.user.id; // Recuperado do token

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Verifica se a senha fornecida está correta
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    await User.findByIdAndDelete(userId);
    return res.status(200).json({ message: "Account successfully deleted." });
  } catch (error) {
    return res.status(500).json({ message: "Server error.", error });
  }
};
