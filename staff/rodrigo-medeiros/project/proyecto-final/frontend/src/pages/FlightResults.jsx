import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getAirlineName from "../airlines_iata_codes";

function FlightResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { flights, searchParams } = location.state || { flights: [], searchParams: {} };

  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [priceFilter, setPriceFilter] = useState([0, 1000]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0); // Estado para preço mínimo
  const [maxPrice, setMaxPrice] = useState(1000); // Estado para preço máximo
  const dropdownRef = useRef(null); // Ref para o filtro de companhia aérea

  useEffect(() => {
    applyFilters();
  }, [selectedAirlines, priceFilter]);

  // Fechar o dropdown de companhias aéreas se o clique for fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const airlinesInResults = [...new Set(flights.map(flight => flight.itineraries[0]?.segments[0]?.carrierCode))];

  const airlineOptions = airlinesInResults.map((airlineCode) => ({
    code: airlineCode,
    name: getAirlineName(airlineCode)
  }));

  const applyFilters = () => {
    let filtered = [...flights];

    // Filtro de companhia aérea
    if (selectedAirlines.length > 0) {
      filtered = filtered.filter((flight) => {
        const airlineCode = flight.itineraries[0]?.segments[0]?.carrierCode;
        return selectedAirlines.includes(airlineCode);
      });
    }

    // Filtro de preço
    filtered = filtered.filter((flight) => {
      const price = flight.price?.total || 0;
      return price >= priceFilter[0] && price <= priceFilter[1];
    });

    setFilteredFlights(filtered);
  };

  const generateSkyscannerLink = (flight, searchParams) => {
    const outbound = flight.itineraries[0];
    const returnFlight = flight.itineraries[1];
    const outboundDate = outbound?.segments[0]?.departure?.at.split("T")[0].replace(/-/g, "");
    const returnDate = returnFlight ? returnFlight?.segments[0]?.departure?.at.split("T")[0].replace(/-/g, "") : null;
    
    const adults = searchParams.adults;
    const children = searchParams.children || 0;
    const cabinClass = flight.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.cabin.toLowerCase() || "economy";

    let link = `https://www.skyscanner.com/transport/flights/${searchParams.from.iata_code.toLowerCase()}/${searchParams.to.iata_code.toLowerCase()}/${outboundDate}/${returnDate || ""}/?adultsv2=${adults}&cabinclass=${cabinClass}&childrenv2=${children}&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&ref=home`;

    if (returnDate) {
      link += `&rtn=1`;
    }

    return link;
  };

  const handlePriceFilterChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setPriceFilter([priceFilter[0], newValue]);
  };

  const handleAirlineChange = (e, airlineCode) => {
    if (e.target.checked) {
      setSelectedAirlines([...selectedAirlines, airlineCode]);
    } else {
      setSelectedAirlines(selectedAirlines.filter(code => code !== airlineCode));
    }
  };

  const handleSelectAllAirlines = () => {
    setSelectedAirlines(airlinesInResults);
  };

  const handleDeselectAllAirlines = () => {
    setSelectedAirlines([]);
  };

  // Determina o valor mínimo e máximo de preço
  useEffect(() => {
    if (flights.length > 0) {
      const priceValues = flights.map(flight => flight.price?.total).filter(Boolean);
      const min = Math.min(...priceValues);
      const max = Math.max(...priceValues);
      setMinPrice(min || 0);  // Atualiza o preço mínimo
      setMaxPrice(max || 1000);  // Atualiza o preço máximo
      setPriceFilter([min || 0, max || 1000]); // Atualiza o filtro de preço
    }
  }, [flights]); // Executa a atualização de preços quando a lista de voos mudar

  if (!flights.length) {
    return <p className="text-center text-blue-900">No flights found.</p>;
  }

  return (
    <main className="bg-white text-sm font-medium text-blue-900 p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">Search Results</h1>

      {/* Filtros */}
      <div className="mb-6 bg-gray-200 p-4 rounded-md shadow-md">
        <div className="flex gap-4 mb-4">
          {/* Filtro de Companhia Aérea */}
          <div className="relative w-72">
            <label className="block text-blue-900">Airline</label>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-blue-500 text-white p-2 rounded w-full text-left"
            >
              {selectedAirlines.length === 0 ? "Select Airlines" : `${selectedAirlines.length} Airline(s) Selected`}
            </button>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute bg-white shadow-lg rounded w-full mt-2 p-4 max-h-64 overflow-auto z-10 border border-gray-300"
              >
                <button
                  onClick={handleSelectAllAirlines}
                  className="bg-blue-500 text-white p-2 rounded mb-2 w-full"
                >
                  Select All
                </button>
                <button
                  onClick={handleDeselectAllAirlines}
                  className="bg-red-500 text-white p-2 rounded mb-2 w-full"
                >
                  Deselect All
                </button>
                {airlineOptions.map(({ code, name }) => (
                  <div key={code} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={code}
                      checked={selectedAirlines.includes(code)}
                      onChange={(e) => handleAirlineChange(e, code)}
                      className="bg-gray-200 p-2 rounded"
                    />
                    <label htmlFor={code}>{name}</label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Filtro de Preço */}
          <div>
            <label className="block text-blue-900">Price Range</label>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceFilter[1]}
              onChange={handlePriceFilterChange}
              className="w-full"
            />
            <p>Price: ${priceFilter[0]} - ${priceFilter[1]}</p>
          </div>
        </div>
      </div>

      <div className="text-blue-900 text-center mb-4">
        <strong>{searchParams.from.name} ({searchParams.from.iata_code})</strong> - 
        <strong> {searchParams.to.name} ({searchParams.to.iata_code})</strong> - 
        Departure: <strong>{searchParams.departureDate}</strong> 
        {searchParams.returnDate && <> - Return: <strong>{searchParams.returnDate}</strong></>} 
        - Passengers: <strong>{searchParams.adults} adult(s) {searchParams.children > 0 ? ` and ${searchParams.children} child(ren)` : ""}</strong> 
        - Class: <strong>{searchParams.cabinClass}</strong>
      </div>

      <div className="flex flex-wrap gap-6 p-6">
        {filteredFlights.map((flight, index) => {
          const outbound = flight.itineraries[0];
          const returnFlight = flight.itineraries[1];

          const getFlightDetails = (itinerary) => {
            const airlineCode = itinerary?.segments[0]?.carrierCode || "Unknown";
            const airline = getAirlineName(airlineCode); // Usando a função para obter o nome da companhia aérea
            const origin = itinerary?.segments[0]?.departure?.iataCode;
            const destination = itinerary?.segments.at(-1)?.arrival?.iataCode;
            const departureDate = itinerary?.segments[0]?.departure?.at.split("T")[0];
            const duration = itinerary?.duration;
            const travelClass = flight.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.cabin || "Economy";
            return { airline, origin, destination, departureDate, duration, travelClass };
          };

          const outboundDetails = getFlightDetails(outbound);
          const returnDetails = returnFlight ? getFlightDetails(returnFlight) : null;
          const price = `${flight.price?.currency} ${flight.price?.total}`;

          return (
            <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md border border-gray-300 flex flex-col">
              <div className="mb-4">
                {/* Exibindo o nome da companhia aérea aqui */}
                <p><strong>Airline:</strong> {outboundDetails.airline}</p>
                <p><strong>From:</strong> {outboundDetails.origin} - <strong>To:</strong> {outboundDetails.destination}</p>
                <p><strong>Departure Date:</strong> {outboundDetails.departureDate}</p>
                <p><strong>Duration:</strong> {outboundDetails.duration}</p>
                <p><strong>Class:</strong> {outboundDetails.travelClass}</p>
              </div>

              {returnDetails && (
                <div className="mb-4">
                  <p><strong>Return From:</strong> {returnDetails.origin} - <strong>To:</strong> {returnDetails.destination}</p>
                  <p><strong>Return Date:</strong> {returnDetails.departureDate}</p>
                  <p><strong>Duration:</strong> {returnDetails.duration}</p>
                  <p><strong>Class:</strong> {returnDetails.travelClass}</p>
                </div>
              )}

              <div className="text-center mt-4 sm:mt-0">
                <p className="text-xl font-semibold">{price}</p>
                <a
                  href={generateSkyscannerLink(flight, searchParams)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4 block underline"
                >
                  Book Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default FlightResults;
