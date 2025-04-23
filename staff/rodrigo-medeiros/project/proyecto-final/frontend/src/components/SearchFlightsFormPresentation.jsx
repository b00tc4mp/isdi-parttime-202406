import React from "react";
import AirportPicker from "./AirportPicker";
import { SearchLogo } from "./icons.jsx";

const SearchFlightsFormPresentation = ({
  isLoggedIn,
  tripType,
  adults,
  children,
  cabinClass,
  isPassengersOpen,
  from,
  to,
  departureDate,
  returnDate,
  handleTripTypeChange,
  handleSelectFrom,
  handleSelectTo,
  handleDepartureChange,
  handleReturnChange,
  togglePassengersForm,
  handleIncrement,
  handleDecrement,
  handleCabinClassChange,
  getSelectionSummary,
  handleDoneClick,
  performSearch,
  handleAddToFavourites,
}) => {
  return (
    <main className="bg-blue-200 text-sm font-large text-blue-900 p-6">
      <h1 className="text-2xl font-bold mb-6">
        Cheapest flights, just one click away!
      </h1>

      {/* Botões de escolha de tipo de viagem */}
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 rounded-l-lg ${
            tripType === "one-way" ? "bg-yellow-500 text-blue-900" : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTripTypeChange("one-way")}
        >
          One-Way
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            tripType === "round-trip" ? "bg-yellow-500 text-blue-900" : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTripTypeChange("round-trip")}
        >
          Round-Trip
        </button>
      </div>

      <div className="text-blue-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
        <AirportPicker placeholder="From" onSelect={handleSelectFrom} />
        <AirportPicker placeholder="To" onSelect={handleSelectTo} />

        <input
          type="date"
          className="bg-yellow-500 text-blue-900 p-2 rounded-lg"
          value={departureDate}
          onChange={handleDepartureChange}
          min={new Date().toISOString().split("T")[0]}
        />

        <input
          type="date"
          className={`bg-yellow-500 text-blue-900 p-2 rounded-lg ${
            tripType === "one-way" ? "opacity-50 cursor-not-allowed" : ""
          }`}
          value={returnDate}
          onChange={handleReturnChange}
          min={departureDate || new Date().toISOString().split("T")[0]}
          disabled={tripType === "one-way"}
        />

        <div className="relative">
          <div
            onClick={togglePassengersForm}
            className="cursor-pointer bg-yellow-500 p-2 rounded-lg text-blue-900 text-xs w-full h-10 flex items-center justify-center"
          >
            {isPassengersOpen
              ? "Passengers and Class"
              : getSelectionSummary(adults, children, cabinClass)}
          </div>

          {isPassengersOpen && (
            <div className="absolute bg-yellow-500 text-blue-900 p-4 rounded-lg mt-1 shadow-lg w-full">
              <div className="flex justify-between">
                <span>Adults</span>
                <div className="flex items-center">
                  <button onClick={() => handleDecrement("adults")}>-</button>
                  <span className="mx-2">{adults}</span>
                  <button onClick={() => handleIncrement("adults")}>+</button>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <span>Children</span>
                <div className="flex items-center">
                  <button onClick={() => handleDecrement("children")}>-</button>
                  <span className="mx-2">{children}</span>
                  <button onClick={() => handleIncrement("children")}>+</button>
                </div>
              </div>

              <select
                value={cabinClass}
                onChange={(e) => handleCabinClassChange(e)}
                className="bg-black text-yellow-500 p-2 rounded-lg mt-2 w-full"
              >
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business Class">Business Class</option>
                <option value="First Class">First Class</option>
              </select>

              <button
                onClick={handleDoneClick}
                className="bg-yellow-500 text-blue-900 p-2 rounded-lg mt-2 w-full"
              >
                Done
              </button>
            </div>
          )}
        </div>

        <button
          onClick={performSearch}
          className="bg-yellow-500 flex items-center justify-center p-2 rounded-lg w-full"
        >
          <SearchLogo className="h-4 w-4" />
          <span className="ml-2">Search</span>
        </button>

        {isLoggedIn && (
          <button
            type="button"
            onClick={() => handleAddToFavourites({ from, to, departureDate, returnDate, adults, children, cabinClass })}
            className="bg-yellow-500 text-blue-900 p-2 rounded-lg"
          >
            Add to Favourites!
          </button>
        )}
      </div>
    </main>
  );
};

export default SearchFlightsFormPresentation;
