export const handleDeleteUser = async (password) => {
  const token = sessionStorage.getItem("authToken");

  const response = await fetch("http://localhost:5000/api/user/deleteUser", {
    // Agora sem userId na URL
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ password }), // Apenas a senha é enviada
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erro ao deletar conta.");
  }
  return response.json();
};
