import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleGetFavouriteRoutes } from "../handlers/userHandlers/handleGetFavouriteRoutes.js";

export function useFavouriteRoutes() {
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchFavouriteRoutes = async () => {
    try {
      const data = await handleGetFavouriteRoutes();
      // Assume que o retorno possui a propriedade "favouriteRoutes" ou o próprio array de rotas
      setRoutes(data.favouriteRoutes || data);
    } catch (err) {
      console.error("Error fetching favourite routes:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchFavouriteRoutes();
  }, [navigate]); // ou [] se não houver dependências da navegação

  return { routes, error, fetchFavouriteRoutes, setRoutes };
}
