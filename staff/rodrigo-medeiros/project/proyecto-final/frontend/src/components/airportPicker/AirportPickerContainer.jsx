// src/pages/AirportPickerContainer.jsx
import React, { useState, useRef, useMemo } from "react";
import AirportPickerPresentation from "./AirportPickerPresentation.jsx";
import airports from "../../data/airports.js"
import { useFuseSearch } from "../../hooks/useFuseSearch.js";

const AirportPickerContainer = ({ placeholder, onSelect }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  // Memoize fuse options so they don’t change on every render
  const fuseOptions = useMemo(
    () => ({
      keys: ["iata_code", "name", "city"],
      threshold: 0.3,
      limit: 5,
    }),
    []
  );

  const { results, setSearchTerm } = useFuseSearch(airports, fuseOptions);

  const handleChange = (value) => {
    setInputValue(value);
    setSearchTerm(value);
  };

  const handleSelectItem = (airport) => {
    const label = `${airport.iata_code} - ${airport.name}`;
    setInputValue(label);
    setSearchTerm("");            // limpa busca
    onSelect(airport);
    inputRef.current.blur();      // fecha teclado móvel
  };

  return (
    <AirportPickerPresentation
      placeholder={placeholder}
      inputValue={inputValue}
      results={results}
      onInputChange={handleChange}
      onItemSelect={handleSelectItem}
      inputRef={inputRef}
    />
  );
};

export default AirportPickerContainer;

