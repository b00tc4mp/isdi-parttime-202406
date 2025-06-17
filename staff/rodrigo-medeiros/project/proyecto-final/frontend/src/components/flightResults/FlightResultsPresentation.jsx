import React from "react";
import getAirlineName from "../../data/airlines_iata_codes";



// Função auxiliar para formatar a duração em horas e minutos
const formatDuration = (duration) => {
  if (!duration) return "";
  
  // Se a duração estiver no formato ISO8601, por exemplo, "PT3H15M"
  if (duration.startsWith("PT")) {
    let hours = 0,
      minutes = 0;
    // Remove o prefixo "PT"
    let value = duration.slice(2);
    const hIndex = value.indexOf("H");
    if (hIndex !== -1) {
      hours = parseInt(value.slice(0, hIndex));
      value = value.slice(hIndex + 1);
    }
    const mIndex = value.indexOf("M");
    if (mIndex !== -1) {
      minutes = parseInt(value.slice(0, mIndex));
    }
    return `${hours}h ${minutes}m`;
  }

  // Se for um número representando minutos
  const totalMinutes = parseInt(duration, 10);
  if (!isNaN(totalMinutes)) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  // Se não for identificável, retorna o valor original
  return duration;
};

const FlightResultsPresentation = ({
  searchParams,
  filteredFlights,
  minPrice,
  maxPrice,
  priceFilter,
  selectedAirlines,
  airlineOptions,
  dropdownOpen,
  dropdownRef,
  handleSelectAllAirlines,
  handleDeselectAllAirlines,
  handleAirlineChange,
  handlePriceFilterChange,
  toggleDropdown,
  generateSkyscannerLink,
}) => {
  if (!filteredFlights.length) {
    return <p className="text-center text-blue-900">No flights found.</p>;
  }

  // Função para extrair e formatar os detalhes de cada voo.
  // Note que passamos também o objeto flight para obter a classe de viagem.
  const getFlightDetails = (itinerary, flight) => {
    const airlineCode = itinerary?.segments[0]?.carrierCode || "Unknown";
    const airline = getAirlineName(airlineCode);
    const origin = itinerary?.segments[0]?.departure?.iataCode;
    const destination = itinerary?.segments.at(-1)?.arrival?.iataCode;
    const departureDate = itinerary?.segments[0]?.departure?.at.split("T")[0];
    const duration = formatDuration(itinerary?.duration);
    const travelClass =
      flight.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.cabin || "Economy";
    return { airline, origin, destination, departureDate, duration, travelClass };
  };

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
              onClick={toggleDropdown}
              className="bg-blue-500 text-white p-2 rounded w-full text-left"
            >
              {selectedAirlines.length === 0
                ? "Select Airlines"
                : `${selectedAirlines.length} Airline(s) Selected`}
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
  value={Math.max(priceFilter[1], minPrice)} // impede mostrar valor menor que o permitido
  onChange={handlePriceFilterChange}
  className="w-full"
/>
            <p>
            Price: ${minPrice} - ${priceFilter[1]}
            </p>
          </div>

        </div>
      </div>

      <div className="text-blue-900 text-center mb-4">
        <strong>
          {searchParams.from.name} ({searchParams.from.iata_code})
        </strong>{" "}
        -{" "}
        <strong>
          {searchParams.to.name} ({searchParams.to.iata_code})
        </strong>{" "}
        - Departure: <strong>{searchParams.departureDate}</strong>{" "}
        {searchParams.returnDate && (
          <>
            - Return: <strong>{searchParams.returnDate}</strong>
          </>
        )}{" "}
        - Passengers:{" "}
        <strong>
          {searchParams.adults} adult(s){" "}
          {searchParams.children > 0 ? `and ${searchParams.children} child(ren)` : ""}
        </strong>{" "}
        - Class: <strong>{searchParams.cabinClass}</strong>
      </div>

      <div className="flex flex-wrap gap-6 p-6">
        {filteredFlights.map((flight, index) => {
          const outbound = flight.itineraries[0];
          const returnFlight = flight.itineraries[1];

          const outboundDetails = getFlightDetails(outbound, flight);
          const returnDetails = returnFlight ? getFlightDetails(returnFlight, flight) : null;
          const price = `${flight.price?.currency} ${flight.price?.total}`;

          return (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-md border border-gray-300 flex flex-col"
            >
              <div className="mb-4">
                <p>
                  <strong>Airline:</strong> {outboundDetails.airline}
                </p>
                <p>
                  <strong>From:</strong> {outboundDetails.origin} -{" "}
                  <strong>To:</strong> {outboundDetails.destination}
                </p>
                <p>
                  <strong>Departure Date:</strong> {outboundDetails.departureDate}
                </p>
                <p>
                  <strong>Duration:</strong> {outboundDetails.duration}
                </p>
                <p>
                  <strong>Class:</strong> {outboundDetails.travelClass}
                </p>
              </div>
              {returnDetails && (
                <div className="mb-4">
                  <p>
                    <strong>Return From:</strong> {returnDetails.origin} -{" "}
                    <strong>To:</strong> {returnDetails.destination}
                  </p>
                  <p>
                    <strong>Return Date:</strong> {returnDetails.departureDate}
                  </p>
                  <p>
                    <strong>Duration:</strong> {returnDetails.duration}
                  </p>
                  <p>
                    <strong>Class:</strong> {returnDetails.travelClass}
                  </p>
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
};

export default FlightResultsPresentation;
