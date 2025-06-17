// src/components/FavouriteRoutesContainer.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { handleSearch } from "../../handlers/flightHandlers/handleSearch.js";
import { handleDeleteFavouriteRoute } from "../../handlers/userHandlers/handleDeleteFavouriteRoute.js";
import { useFavouriteRoutes } from "../../hooks/useFavouriteRoutes.js";
import { useAlert } from "../../context/AlertContext.jsx";
import FavouriteRoutesPresentation from "./FavouriteRoutesPresentation.jsx";

const FavouriteRoutesContainer = () => {
  const { routes, error, fetchFavouriteRoutes, setRoutes } = useFavouriteRoutes();
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const handleSearchAgain = async (route) => {
    if (!route) {
      console.error("Error: route is undefined");
      return;
    }

    showAlert("Searching the best offers", "info");

    try {
      const flights = await handleSearch(route);
      navigate("/flightResults", {
        state: { flights, searchParams: route },
      });
    } catch (error) {
      console.error("Error searching again:", error);
      showAlert("Error searching for flights", "error");
    }
  };

  const deleteRoute = async (routeId) => {
    try {
      const result = await handleDeleteFavouriteRoute(routeId);

      if (result.favouriteRoutes) {
        setRoutes(result.favouriteRoutes);
      } else {
        fetchFavouriteRoutes();
      }

      showAlert("Favourite route successfully deleted", "success");
    } catch (error) {
      console.error("Error deleting route:", error);
      showAlert("Failed to delete favourite route", "error");
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

export default FavouriteRoutesContainer;
