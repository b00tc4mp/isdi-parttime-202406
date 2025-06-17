// src/pages/MyFavouriteRoutes.jsx
import React from "react";
import FavouriteRoutesContainer from "../components/favouriteRoutes/FavouriteRoutesContainer";

const MyFavouriteRoutes = () => {
  return (
    <div className="flex flex-col items-center bg-blue-200 min-h-screen pt-20 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-yellow-600">
          My Favourite Routes
        </h1>
        <FavouriteRoutesContainer />
      </div>
    </div>
  );
};

export default MyFavouriteRoutes;

