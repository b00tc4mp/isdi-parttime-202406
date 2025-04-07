import { useLocation, useNavigate} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { isUserLoggedIn } from "../logic/isUserLoggedIn";
import AirportPicker from "./AirportPicker";
import airports from "../airports.js";
import { SearchLogo } from "./icons.jsx";
import ShowFlights from "./ShowFlights";
import { handleAddToFavourites } from '../handlers/userHandlers/handleAddToFavourites.js';
import { handleSearch } from "../handlers/flightHandlers/handleSearch.js";
import {
  handleIncrement,
  handleDecrement,
  handleCabinClassChange,
  togglePassengersForm,
  handleDoneClick,
  getSelectionSummary,
  handleTripTypeChange,
} from "./handlers.jsx";
import axios from "axios";

function SearchFlightsForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tripType, setTripType] = useState("one-way");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [isPassengersOpen, setIsPassengersOpen] = useState(false);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  //const [showResults, setShowResults] = useState(false);
  const [flights, setFlights] = useState([]);
  const [searchParams, setSearchParams] = useState({
    from: null,
    to: null,
    departureDate: "",
    returnDate: "",
    adults: 1,
    tripType: "one-way",
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  setIsLoggedIn(isUserLoggedIn());

  if (location.state) {
    const { from, to, departureDate, returnDate, adults, children, cabinClass } = location.state;

    setFrom(from);
    setTo(to);
    setDepartureDate(departureDate);
    setReturnDate(returnDate || ""); // Garante que não fique `undefined`
    setAdults(adults);
    setChildren(children);
    setCabinClass(cabinClass);

    // Ajuste para setar o tipo de viagem corretamente
    setTripType(returnDate ? "round-trip" : "one-way");

    setSearchParams({
      from,
      to,
      departureDate,
      returnDate: returnDate || "",
      adults,
      children,
      cabinClass,
      tripType: returnDate ? "round-trip" : "one-way",
    });
  }
}, [location.state]);
  

  // Ensure the date values update correctly
  const handleDepartureChange = (e) => {
    const newDepartureDate = e.target.value;
    setDepartureDate(newDepartureDate);
    setSearchParams((prevParams) => ({
      ...prevParams,
      departureDate: newDepartureDate,
    }));
  };

  const handleReturnChange = (e) => {
    const newReturnDate = e.target.value;
    setReturnDate(newReturnDate);
    setSearchParams((prevParams) => ({
      ...prevParams,
      returnDate: newReturnDate,
    }));
  };

  // Update searchParams when an airport is selected
  const handleSelectFrom = (airport) => {
    setFrom(airport);
    setSearchParams((prevParams) => ({
      ...prevParams,
      from: airport, // Armazena o objeto completo
    }));
  };
  
  const handleSelectTo = (airport) => {
    setTo(airport);
    setSearchParams((prevParams) => ({
      ...prevParams,
      to: airport, // Armazena o objeto completo
    }));
  };
  

  /*const handleSearch = async () => {
    console.log("🔍 Iniciando busca de voos...");
  
    const { from, to, departureDate, returnDate, adults } = searchParams;
    console.log("📌 Parâmetros de entrada:", searchParams);
    const cabinClassMap = {
      "Economy": "ECONOMY",
      "Premium Economy": "PREMIUM_ECONOMY",
      "Business Class": "BUSINESS",
      "First Class": "FIRST"
    };
    
    const formattedCabinClass = cabinClassMap[cabinClass] || "ECONOMY"; // Padrão: Economy
    
  
    // Construção dos parâmetros da requisição, garantindo que apenas valores válidos sejam enviados
    const requestParams = {
      originLocationCode: from?.trim(),
      destinationLocationCode: to?.trim(),
      departureDate: departureDate?.trim(),
      returnDate: returnDate ? returnDate.trim() : undefined,
      adults: Number(adults),
      children: Number(children), // Corrigido de "child" para "children"
      travelClass: formattedCabinClass // Usando o valor formatado corretamente
    };
    

     
    if (returnDate) {
      requestParams.returnDate = returnDate?.trim(); // Adiciona apenas se existir
    }
  
    console.log("📤 Parâmetros formatados para API:", requestParams);
  
    try {
      console.log("🚀 Enviando requisição para a API...");
  
      const response = await axios.get("http://localhost:5000/api/flights/search", {
        params: requestParams,
      });
  
      console.log("✅ Resposta recebida da API:", response.data);
      setFlights(response.data.data || []);
      setShowResults(true);
    } catch (error) {
      console.error(
        "❌ Erro ao buscar voos:",
        error.response ? error.response.data : error.message
      );
    }
  };
*/
const performSearch = async () => {
  console.log("Iniciando busca com handler reutilizável...");
  // Chama o handler reutilizável e obtém os dados dos voos
  const flightsData = await handleSearch(searchParams);
  
  // Navega para a página de resultados, passando os dados obtidos
  navigate('/FlightResults', { state: { flights: flightsData, searchParams } });
};

  

  const routeData = { 
    from,
    to,
    departureDate,
    returnDate,
    adults,
    children,
    cabinClass
};

  

  
  
  
  return (
    <main className="bg-blue-200 text-sm font-large text-blue-900 p-6">
      <h1 className="text-2xl font-bold mb-6">
        Voos mais baratos, fácil como um clique!
      </h1>

      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 rounded-l-lg ${tripType === "one-way" ? "bg-yellow-500 text-black" : "bg-gray-300 text-gray-700"}`}
          onClick={() => handleTripTypeChange("one-way", setTripType, setReturnDate)}
        >
          Só Ida
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${tripType === "round-trip" ? "bg-yellow-500 text-black" : "bg-gray-300 text-gray-700"}`}
          onClick={() => handleTripTypeChange("round-trip", setTripType)}
        >
          Ida e Volta
        </button>
      </div>

      <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
        <AirportPicker placeholder="De" onSelect={handleSelectFrom} />
        <AirportPicker placeholder="Para" onSelect={handleSelectTo} />

        <input
          type="date"
          className="bg-yellow-500 text-blue-900 p-2 rounded-lg"
          placeholder="Partida"
          value={departureDate}
          onChange={handleDepartureChange}
          min={new Date().toISOString().split("T")[0]}
        />

        <input
          type="date"
          className={`bg-yellow-500 text-black p-2 rounded-lg ${tripType === "one-way" ? "opacity-50 cursor-not-allowed" : ""}`}
          placeholder="Retorno"
          value={returnDate}
          onChange={handleReturnChange}
          min={departureDate || new Date().toISOString().split("T")[0]}
          disabled={tripType === "one-way"}
        />

        <div className="relative">
          <div onClick={() => togglePassengersForm(setIsPassengersOpen)} className="cursor-pointer bg-yellow-500 p-2 rounded-lg text-black text-xs w-full h-10 flex items-center justify-center">
            {isPassengersOpen ? "Passageiros e Classe" : getSelectionSummary(adults, children, cabinClass)}
          </div>

          {isPassengersOpen && (
            <div className="absolute bg-yellow-500 text-black p-4 rounded-lg mt-1 shadow-lg w-full">
              <div className="flex justify-between">
                <span>Adultos</span>
                <div className="flex items-center">
                  <button onClick={() => handleDecrement(adults, setAdults, 1)}>-</button>
                  <span className="mx-2">{adults}</span>
                  <button onClick={() => handleIncrement(adults, setAdults, 8)}>+</button>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <span>Crianças</span>
                <div className="flex items-center">
                  <button onClick={() => handleDecrement(children, setChildren, 0)}>-</button>
                  <span className="mx-2">{children}</span>
                  <button onClick={() => handleIncrement(children, setChildren, 8)}>+</button>
                </div>
              </div>

              <select value={cabinClass} onChange={(e) => handleCabinClassChange(e, setCabinClass)} className="bg-black text-yellow-500 p-2 rounded-lg mt-2 w-full">
                <option value="Economy">Econômica</option>
                <option value="Premium Economy">Econômica Premium</option>
                <option value="Business Class">Classe Executiva</option>
                <option value="First Class">Primeira Classe</option>
              </select>

              <button onClick={() => handleDoneClick(setIsPassengersOpen)} className="bg-yellow-500 text-black p-2 rounded-lg mt-2 w-full">
                Concluído
              </button>
            </div>
          )}
        </div>

        <button onClick={performSearch} className="bg-yellow-500 flex items-center justify-center p-2 rounded-lg w-full">
  <SearchLogo className="h-4 w-4" />
  <span className="ml-2">Buscar</span>
</button>

        {isLoggedIn && ( // Exibe o botão apenas se o usuário estiver logado
  <button
  type="button"
  onClick={() => handleAddToFavourites(routeData)} // Pass routeData as the whole object
  className="bg-yellow-500 text-blue-900 p-2 rounded-lg"
>
  Add to Favourites!
</button>
)}

      </div>

      

    </main>
  );
}

export default SearchFlightsForm;
//{showResults && <ShowFlights flights={flights} />}
