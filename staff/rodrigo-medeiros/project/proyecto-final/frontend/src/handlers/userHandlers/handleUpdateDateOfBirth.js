export const handleUpdateDateOfBirth = async (
  newDateOfBirth,
  password,
  navigate
) => {
  console.log(
    "handleUpdateDateOfBirth chamado!",
    newDateOfBirth,
    password,
    navigate
  );
  const token = sessionStorage.getItem("authToken");

  if (!token) {
    console.log("Token não encontrado, redirecionando para login.");
    return;
  }

  console.log("Token encontrado:", token);

  try {
    console.log("Enviando requisição para API...");
    const response = await fetch(
      "http://localhost:5000/api/user/updateDateOfBirth",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ dateOfBirth: newDateOfBirth, password }),
      }
    );

    console.log("Resposta recebida da API:", response.status);
    if (!response.ok) throw new Error(await response.text());

    console.log("Data de nascimento atualizada com sucesso!");
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar a data de nascimento:", error);
    throw error;
  }
};
