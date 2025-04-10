import User from "../../models/User.js";
import bcrypt from "bcryptjs";

export const deleteUser = async (req, res) => {
  try {
    console.log("Iniciando o processo de exclusão do usuário.");
    const { password } = req.body;
    console.log(
      "Senha recebida do corpo da requisição:",
      password ? "[FORNECIDA]" : "[NÃO FORNECIDA]"
    );

    const userId = req.user.id; // Recuperado do token
    console.log("ID do usuário recuperado do token:", userId);

    const user = await User.findById(userId);
    if (!user) {
      console.log(`Usuário não encontrado para o ID: ${userId}`);
      return res.status(404).json({ message: "User not found." });
    }
    console.log("Usuário encontrado:", user);

    // Verifica se a senha fornecida está correta
    console.log("Comparando a senha fornecida com a senha armazenada.");
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Resultado da comparação de senha:", isMatch);

    if (!isMatch) {
      console.log(`Senha incorreta para o usuário com ID: ${userId}`);
      return res.status(401).json({ message: "Incorrect password." });
    }

    console.log(`Excluindo o usuário com ID: ${userId}`);
    await User.findByIdAndDelete(userId);
    console.log(
      `Exclusão do usuário realizada com sucesso para o ID: ${userId}`
    );

    return res.status(200).json({ message: "Account successfully deleted." });
  } catch (error) {
    console.error("Erro no deleteUser:", error);
    return res.status(500).json({ message: "Server error.", error });
  }
};
