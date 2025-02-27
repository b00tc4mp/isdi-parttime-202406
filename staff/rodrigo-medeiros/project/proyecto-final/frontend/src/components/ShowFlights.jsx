import React from "react";

function ShowFlights({ flights }) {
  if (!flights || flights.length === 0) {
    return <p className="text-center text-gray-500">Nenhum voo encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {flights.map((flight, index) => {
        const airline = flight.itineraries[0]?.segments[0]?.carrierCode || "Companhia Aérea";
        const origin = flight.itineraries[0]?.segments[0]?.departure?.iataCode;
        const destination = flight.itineraries[0]?.segments.at(-1)?.arrival?.iataCode;
        const departureDate = flight.itineraries[0]?.segments[0]?.departure?.at.split("T")[0]; // Pegando só a data
        const formattedDepartureDate = departureDate.replace(/-/g, ""); // Convertendo para YYYYMMDD
        const duration = flight.itineraries[0]?.duration;
        const price = `${flight.price?.currency} ${flight.price?.total}`;

        // 🔗 Criando o link real para o Skyscanner
        const purchaseLink = `https://www.skyscanner.com.br/transport/flights/${origin}/${destination}/${formattedDepartureDate}`;

        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-xl font-bold text-blue-600">✈ {airline}</h2>
            <div className="mt-2 text-gray-700">
              <p>🛫 Origem: {origin}</p>
              <p>🛬 Destino: {destination}</p>
              <p>📅 Partida: {new Date(departureDate).toLocaleDateString()}</p>
              <p>⏳ Duração: {duration}</p>
            </div>
            <p className="mt-4 text-lg font-semibold text-green-600">💰 Preço: {price}</p>

            {/* 🔗 Botão de compra no Skyscanner */}
            <a 
              href={purchaseLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-center bg-yellow-500 text-black font-bold p-2 rounded-lg mt-4 hover:bg-yellow-600 transition duration-200"
            >
              Comprar no Skyscanner
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ShowFlights;