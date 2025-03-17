import axios from "axios";

export const handleAddToFavourites = async (routeData) => {
  const { from, to, departureDate, adults, children, cabinClass } = routeData;

  // Verificar se todos os campos obrigatórios estão preenchidos
  if (!from || !to || !departureDate || !adults || !cabinClass) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  try {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      alert("Você precisa estar logado para salvar rotas favoritas.");
      return;
    }

    const response = await axios.post(
      "http://localhost:5000/api/user/favouriteRoutes",
      routeData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    alert("Rota salva com sucesso!");
  } catch (error) {
    alert(error.response?.data?.message || "Erro ao salvar a rota.");
  }
};
