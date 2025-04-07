import express from "express";
import axios from "axios";
import getAmadeusToken from "../logic/flightRelated/amadeusAuth.js"; //Certifique-se de que o caminho está correto

const router = express.Router();
const AMADEUS_API_BASE =
  "https://test.api.amadeus.com/v2/shopping/flight-offers";

router.get("/search", async (req, res) => {
  try {
    console.log("🔍 Query recebida:", req.query); // Log para depuração

    // Pegando os parâmetros da requisição
    const {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      returnDate,
      adults,
      children,
      travelClass,
    } = req.query;

    if (
      !originLocationCode ||
      !destinationLocationCode ||
      !departureDate ||
      !adults
    ) {
      return res
        .status(400)
        .json({ error: "Missing required query parameters." });
    }

    // Obter token da API Amadeus
    const token = await getAmadeusToken();
    console.log("🛂 Token Amadeus:", token);

    // Construir os parâmetros da requisição para a API Amadeus
    const params = {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      adults,
    };
    if (returnDate) params.returnDate = returnDate; // Adiciona apenas se não for undefined
    if (children) params.children = children; // Corrigido de 'child' para 'children'
    if (travelClass) params.travelClass = travelClass; // Adiciona travelClass, se disponível

    // Fazer requisição para a Amadeus API
    const response = await axios.get(AMADEUS_API_BASE, {
      headers: { Authorization: `Bearer ${token}` },
      params,
    });

    console.log("✅ Resposta da Amadeus recebida!");
    res.json(response.data);
  } catch (error) {
    console.error(
      "❌ Erro ao buscar voos:",
      error.response?.data || error.message
    );
    res.status(error.response?.status || 500).json({
      error: error.response?.data || "Failed to fetch flight offers",
    });
  }
});

export default router;
