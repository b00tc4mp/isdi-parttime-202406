const API_URL = "http://localhost:5000/api/user"; // Evita repetir a URL base

// 🏷 Atualizar Senha
export const handleUpdatePassword = async (currentPassword, newPassword) => {
  const token = sessionStorage.getItem("authToken");

  if (!token) {
    console.log("Token não encontrado, redirecionando para login.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/user/updatePassword",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      }
    );

    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Failed to update password");

    alert("Password updated successfully");
  } catch (err) {
    console.log("Erro na requisição:", err);
    alert(`Error: ${err.message}`);
  }
};
