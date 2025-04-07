import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleGetFavouriteRoutes } from "../handlers/userHandlers/handleGetFavouriteRoutes.js";
import { handleSearch } from "../handlers/flightHandlers/handleSearch.js";
import { handleDeleteFavouriteRoute } from "../handlers/userHandlers/handleDeleteFavouriteRoute.js";

const MyFavouriteRoutes = () => {
  const [routes, setRoutes] = useState([]); // Estado para armazenar as rotas favoritas
  const navigate = useNavigate();

  useEffect(() => {
    fetchFavouriteRoutes(); // Busca as rotas favoritas quando o componente é montado
  }, []);

  // Função para buscar as rotas favoritas utilizando o handler centralizado
  const fetchFavouriteRoutes = async () => {
    try {
      const data = await handleGetFavouriteRoutes();
      // Assume que o retorno possui a propriedade "favouriteRoutes". Se não, ajuste conforme necessário.
      setRoutes(data.favouriteRoutes || data);
    } catch (error) {
      console.error("Error fetching favourite routes:", error);
    }
  };

  // Função para refazer a busca de voos a partir de uma rota favorita
  const handleSearchAgain = async (route) => {
    if (!route) {
      console.error("Erro: route está indefinida");
      return;
    }

    console.log("🔍 Buscando novamente a rota favorita...", route);

    try {
      // Busca os voos novamente utilizando o handler de busca
      const flights = await handleSearch(route);

      // Redireciona para a página de resultados, passando os voos e os parâmetros da rota
      navigate("/flightResults", {
        state: { flights, searchParams: route },
      });
    } catch (error) {
      console.error("Erro ao buscar voos novamente:", error);
    }
  };

  // Função para deletar uma rota favorita
  const deleteRoute = async (routeId) => {
    try {
      // Chama o handler para deletar a rota
      const result = await handleDeleteFavouriteRoute(routeId);
      // Se o backend retorna a lista atualizada, atualizamos o estado "routes"
      if (result.favouriteRoutes) {
        setRoutes(result.favouriteRoutes);
      } else {
        // Se não for retornado, reexecutamos a busca para atualizar a lista
        fetchFavouriteRoutes();
      }
    } catch (error) {
      console.error("Error deleting route:", error);
    }
  };

  return (
    <div className="bg-blue-200 min-h-screen w-full text-blue-900 p-6">
      <h1 className="text-2xl font-bold mb-4">My Favourite Routes</h1>
      {routes.length === 0 ? (
        <p>You don't have any favorite routes yet.</p>
      ) : (
        <ul>
          {routes.map((route, index) => (
            <li
              key={route._id}
              className="border p-4 rounded mb-2 flex justify-between"
            >
              <div>
                <h2 className="font-bold">Favourite Route #{index + 1}</h2>
                <p>
                  <strong>From:</strong> {route.from.name} (
                  {route.from.iata_code})
                </p>
                <p>
                  <strong>To:</strong> {route.to.name} (
                  {route.to.iata_code})
                </p>
                <p>
                  <strong>Departure Date:</strong> {route.departureDate}
                </p>
                {route.returnDate && (
                  <p>
                    <strong>Return Date:</strong> {route.returnDate}
                  </p>
                )}
                <p>
                  <strong>Passengers:</strong> {route.adults} adults,{" "}
                  {route.children} children
                </p>
                <p>
                  <strong>Class:</strong> {route.cabinClass || "Economy"}
                </p>
              </div>
              <div>
                <button
                  onClick={() => handleSearchAgain(route)}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Search Again
                </button>
                <button
                  onClick={() => deleteRoute(route._id)}
                  className="mt-2 bg-red-500 text-white p-2 rounded"
                >
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
