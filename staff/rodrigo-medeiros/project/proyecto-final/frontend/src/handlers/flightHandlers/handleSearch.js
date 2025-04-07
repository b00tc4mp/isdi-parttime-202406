import axios from "axios";

export const handleSearch = async (searchParams) => {
  console.log("🔍 Iniciando busca de voos...");

  if (!searchParams || !searchParams.from || !searchParams.to) {
    console.error("Erro: Parâmetros de busca inválidos!", searchParams);
    return;
  }

  const requestParams = {
    originLocationCode: searchParams.from.iata_code?.trim(),
    destinationLocationCode: searchParams.to.iata_code?.trim(),
    departureDate: searchParams.departureDate?.trim(),
    adults: Number(searchParams.adults),
  };

  if (searchParams.returnDate) {
    requestParams.returnDate = searchParams.returnDate?.trim();
  }
  if (searchParams.children) {
    requestParams.children = Number(searchParams.children); // Corrigido de 'child' para 'children'
  }
  if (searchParams.cabinClass) {
    requestParams.travelClass = searchParams.cabinClass; // Corrigido para `travelClass`
  }

  console.log("📤 Parâmetros formatados para API:", requestParams);

  try {
    console.log("🚀 Enviando requisição para a API...");
    const response = await axios.get(
      "http://localhost:5000/api/flights/search",
      { params: requestParams }
    );

    console.log("✅ Resposta recebida da API:", response.data);
    return response.data.data || [];
  } catch (error) {
    console.error(
      "❌ Erro ao buscar voos:",
      error.response ? error.response.data : error.message
    );
    return [];
  }
};
