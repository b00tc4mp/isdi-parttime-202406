// login.js
export const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas.");
    }

    const data = await response.json();
    const { token } = data;

    // Armazenar o token no sessionStorage
    sessionStorage.setItem("authToken", token);

    return { success: true };
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return { success: false, message: error.message };
  }
};
