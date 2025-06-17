import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../logic/isUserLoggedIn.js";
import SearchFlightsFormPresentation from "./SearchFlightsFormPresentation.jsx";
import { handleAddToFavourites } from "../../handlers/userHandlers/handleAddToFavourites.js";
import { handleSearch } from "../../handlers/flightHandlers/handleSearch.js";
import { useAlert } from "../../context/AlertContext"; // ✅ Importação do alerta

const SearchFlightsFormContainer = () => {
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

  const navigate = useNavigate();
  const location = useLocation();
  const { showAlert } = useAlert(); // ✅ Hook de alerta

  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());

    if (location.state) {
      const { from, to, departureDate, returnDate, adults, children, cabinClass } = location.state;

      setFrom(from);
      setTo(to);
      setDepartureDate(departureDate);
      setReturnDate(returnDate || "");
      setAdults(adults);
      setChildren(children);
      setCabinClass(cabinClass);
      setTripType(returnDate ? "round-trip" : "one-way");
    }
  }, [location.state]);

  const handleDepartureChange = (e) => setDepartureDate(e.target.value);
  const handleReturnChange = (e) => setReturnDate(e.target.value);
  const handleSelectFrom = (airport) => setFrom(airport);
  const handleSelectTo = (airport) => setTo(airport);

  const handleTripTypeChange = (type) => {
    setTripType(type);
    if (type === "one-way") setReturnDate("");
  };

  const togglePassengersForm = () => setIsPassengersOpen(!isPassengersOpen);
  const handleIncrement = (field) => {
    if (field === "adults") setAdults((prev) => Math.min(prev + 1, 8));
    else if (field === "children") setChildren((prev) => Math.min(prev + 1, 8));
  };
  const handleDecrement = (field) => {
    if (field === "adults") setAdults((prev) => Math.max(prev - 1, 1));
    else if (field === "children") setChildren((prev) => Math.max(prev - 1, 0));
  };
  const handleCabinClassChange = (e) => setCabinClass(e.target.value);
  const handleDoneClick = () => setIsPassengersOpen(false);

  const getSelectionSummary = (adults, children, cabinClass) =>
    `${adults} adult(s)${children > 0 ? `, ${children} child(ren)` : ""}, ${cabinClass}`;

  // ✅ Alerta ao iniciar busca de voos
  const performSearch = async () => {
    const routeData = { from, to, departureDate, returnDate, adults, children, cabinClass };
    showAlert("Searching the best offers", "info");

    try {
      const flightsData = await handleSearch(routeData);
      navigate("/flightResults", { state: { flights: flightsData, searchParams: routeData } });
    } catch (error) {
      console.error("Error during search:", error);
      showAlert("An error occurred while searching for flights", "error");
    }
  };

  // ✅ NOVO: Alerta ao salvar rota favorita
  const handleAddRouteToFavourites = async () => {
    try {
      await handleAddToFavourites({
        from,
        to,
        departureDate,
        returnDate,
        adults,
        children,
        cabinClass,
      });
      showAlert("Route saved to favorites", "success"); // ✅ Alerta de sucesso
    } catch (error) {
      console.error("Error adding favourite route:", error);
      showAlert("Failed to save favorite route", "error"); // ✅ Alerta de erro
    }
  };

  return (
    <SearchFlightsFormPresentation
      isLoggedIn={isLoggedIn}
      tripType={tripType}
      adults={adults}
      children={children}
      cabinClass={cabinClass}
      isPassengersOpen={isPassengersOpen}
      from={from}
      to={to}
      departureDate={departureDate}
      returnDate={returnDate}
      handleTripTypeChange={handleTripTypeChange}
      handleSelectFrom={handleSelectFrom}
      handleSelectTo={handleSelectTo}
      handleDepartureChange={handleDepartureChange}
      handleReturnChange={handleReturnChange}
      togglePassengersForm={togglePassengersForm}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleCabinClassChange={handleCabinClassChange}
      getSelectionSummary={getSelectionSummary}
      handleDoneClick={handleDoneClick}
      performSearch={performSearch}
      handleAddToFavourites={handleAddRouteToFavourites}
    />
  );
};

export default SearchFlightsFormContainer;
