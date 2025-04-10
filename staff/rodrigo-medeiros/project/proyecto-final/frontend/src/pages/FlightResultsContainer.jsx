import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlightResultsPresentation from "../components/FlightResultsPresentation";
import getAirlineName from "../airlines_iata_codes";

const FlightResultsContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { flights, searchParams } = location.state || { flights: [], searchParams: {} };

  // Estados para voos e filtros
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [priceFilter, setPriceFilter] = useState([0, 1000]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  
  const dropdownRef = useRef(null);

  // Atualiza os filtros sempre que os estados relevantes mudam
  useEffect(() => {
    applyFilters();
  }, [selectedAirlines, priceFilter, flights]);

  // Atualiza os valores mínimos e máximos de preço a partir dos voos
  useEffect(() => {
    if (flights.length > 0) {
      const priceValues = flights.map(flight => flight.price?.total).filter(Boolean);
      const min = Math.min(...priceValues);
      const max = Math.max(...priceValues);
      setMinPrice(min || 0);
      setMaxPrice(max || 1000);
      setPriceFilter([min || 0, max || 1000]);
    }
  }, [flights]);

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  // Handlers de filtros
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Função para gerar link do Skyscanner
  const generateSkyscannerLink = (flight, searchParams) => {
    const outbound = flight.itineraries[0];
    const returnFlight = flight.itineraries[1];
    const outboundDate = outbound?.segments[0]?.departure?.at.split("T")[0].replace(/-/g, "");
    const returnDate = returnFlight ? returnFlight?.segments[0]?.departure?.at.split("T")[0].replace(/-/g, "") : "";
    const adults = searchParams.adults;
    const children = searchParams.children || 0;
    const cabinClass = flight.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.cabin?.toLowerCase() || "economy";
    let link = `https://www.skyscanner.com/transport/flights/${searchParams.from.iata_code.toLowerCase()}/${searchParams.to.iata_code.toLowerCase()}/${outboundDate}/${returnDate}/?adultsv2=${adults}&cabinclass=${cabinClass}&childrenv2=${children}&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&ref=home`;
    if (returnDate) {
      link += `&rtn=1`;
    }
    return link;
  };

  return (
    <FlightResultsPresentation
      searchParams={searchParams}
      filteredFlights={filteredFlights}
      minPrice={minPrice}
      maxPrice={maxPrice}
      priceFilter={priceFilter}
      selectedAirlines={selectedAirlines}
      airlineOptions={airlineOptions}
      dropdownOpen={dropdownOpen}
      dropdownRef={dropdownRef}
      handleSelectAllAirlines={handleSelectAllAirlines}
      handleDeselectAllAirlines={handleDeselectAllAirlines}
      handleAirlineChange={handleAirlineChange}
      handlePriceFilterChange={handlePriceFilterChange}
      toggleDropdown={toggleDropdown}
      generateSkyscannerLink={generateSkyscannerLink}
    />
  );
};

export default FlightResultsContainer;
