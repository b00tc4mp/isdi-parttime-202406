import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyFavouriteRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFavouriteRoutes();
  }, []);

  const fetchFavouriteRoutes = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/user/favouriteRoutes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRoutes(response.data);
    } catch (error) {
      console.error("Erro ao buscar rotas:", error);
    }
  };

  const handleSearchAgain = (route) => {
    navigate("/", { state: route });
  };

  const handleDeleteRoute = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/users/favouriteRoutes${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRoutes(routes.filter((route) => route._id !== id));
    } catch (error) {
      console.error("Erro ao deletar rota:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Minhas Rotas Favoritas</h1>
      {routes.length === 0 ? (
        <p>Você ainda não tem rotas favoritas.</p>
      ) : (
        <ul>
          {routes.map((route) => (
            <li key={route._id} className="border p-4 rounded mb-2 flex justify-between">
              <div>
                <p><strong>Origem:</strong> {route.from}</p>
                <p><strong>Destino:</strong> {route.to}</p>
                <p><strong>Data de Partida:</strong> {route.departureDate}</p>
                {route.returnDate && <p><strong>Data de Retorno:</strong> {route.returnDate}</p>}
                <p><strong>Passageiros:</strong> {route.adults} adultos, {route.children} crianças</p>
                <p><strong>Classe:</strong> {route.cabinClass}</p>
              </div>
              <div>
                <button onClick={() => handleSearchAgain(route)} className="bg-blue-500 p-2 rounded mr-2">
                  Search Again
                </button>
                <button onClick={() => handleDeleteRoute(route._id)} className="bg-red-500 p-2 rounded">
                  Delete Route
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyFavouriteRoutes;
