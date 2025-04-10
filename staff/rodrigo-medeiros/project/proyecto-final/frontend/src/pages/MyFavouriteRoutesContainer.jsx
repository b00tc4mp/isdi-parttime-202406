import React from "react";
import { useNavigate } from "react-router-dom";
import { handleSearch } from "../handlers/flightHandlers/handleSearch.js";
import { handleDeleteFavouriteRoute } from "../handlers/userHandlers/handleDeleteFavouriteRoute.js";
import FavouriteRoutesPresentation from "../components/FavouriteRoutesPresentation";
import { useFavouriteRoutes } from "../hooks/useFavouriteRoutes";

const MyFavouriteRoutesContainer = () => {
  // Extraímos a lógica de busca e gerenciamento de rotas para o hook useFavouriteRoutes
  const { routes, error, fetchFavouriteRoutes, setRoutes } = useFavouriteRoutes();
  const navigate = useNavigate();

  // Handler para refazer a busca de voos a partir de uma rota favorita
  const handleSearchAgain = async (route) => {
    if (!route) {
      console.error("Error: route is undefined");
      return;
    }
    console.log("🔍 Searching again for favourite route...", route);
    try {
      const flights = await handleSearch(route);
      navigate("/flightResults", {
        state: { flights, searchParams: route },
      });
    } catch (error) {
      console.error("Error searching again:", error);
    }
  };

  // Handler para deletar uma rota favorita
  const deleteRoute = async (routeId) => {
    try {
      const result = await handleDeleteFavouriteRoute(routeId);
      if (result.favouriteRoutes) {
        setRoutes(result.favouriteRoutes);
      } else {
        fetchFavouriteRoutes();
      }
    } catch (error) {
      console.error("Error deleting route:", error);
    }
  };

  return (
    <FavouriteRoutesPresentation
      routes={routes}
      error={error}
      onSearchAgain={handleSearchAgain}
      onDeleteRoute={deleteRoute}
    />
  );
};

export default MyFavouriteRoutesContainer;
