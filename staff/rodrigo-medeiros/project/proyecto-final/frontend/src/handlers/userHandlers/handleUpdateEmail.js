const API_URL = "http://localhost:5000/api/user";

// 🏷 Atualizar Email
export const handleUpdateEmail = async (newEmail, password, navigate) => {
  const token = sessionStorage.getItem("authToken");

  if (!token) {
    console.log("Token não encontrado, redirecionando para login.");
    navigate("/signin");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/user/updateemail", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({ email: newEmail, password }),
    });
    console.log(
      "Enviando requisição para:",
      "http://localhost:5000/api/user/updateemail"
    );
    console.log("Headers:", {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });

    if (!response.ok) throw new Error(await response.text());

    const data = await response.json();
    alert("Email updated successfully");
    console.log(data);
    return data;
  } catch (err) {
    console.log("Erro na requisição:", err);
    alert(`Error: ${err.message}`);
  }
};
