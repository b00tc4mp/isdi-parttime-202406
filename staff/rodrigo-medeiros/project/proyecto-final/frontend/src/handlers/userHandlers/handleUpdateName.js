export const handleUpdateName = async (username, password) => {
  console.log("handleUpdateName chamado!", username, password); // Teste 4
  const token = sessionStorage.getItem("authToken");

  if (!token) {
    console.log("Token não encontrado, redirecionando para login.");
    return;
  }

  console.log("Token encontrado:", token); // Verificando se o token foi recuperado corretamente

  try {
    console.log("Enviando requisição para API...");
    const response = await fetch(
      "http://localhost:5000/api/user/updateusername",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, password }),
      }
    );

    console.log("Resposta recebida da API:", response.status); // Teste 5
    if (!response.ok) throw new Error(await response.text());

    console.log("Nome de usuário atualizado com sucesso!");
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar o nome de usuário:", error);
    throw error;
  }
};
