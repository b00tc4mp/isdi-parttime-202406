// AirportPicker.jsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import Fuse from "fuse.js";
import airports from "../airports";

// Hook genérico de busca com fuse.js
function useFuseSearch(data, { keys, threshold = 0.3, limit = 5 }) {
  const fuse = useMemo(() => new Fuse(data, { keys, threshold }), [data, keys, threshold]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const items = fuse.search(searchTerm).map(r => r.item).slice(0, limit);
      setResults(items);
    } else {
      setResults([]);
    }
  }, [fuse, searchTerm, limit]);

  return { results, setSearchTerm };
}

const AirportPicker = ({ placeholder, onSelect }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const { results, setSearchTerm } = useFuseSearch(airports, {
    keys: ["iata_code", "name", "city"],
    threshold: 0.3,
    limit: 5,
  });

  const handleChange = e => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSelect = airport => {
    const label = `${airport.iata_code} - ${airport.name}`;
    setInputValue(label);
    setSearchTerm("");          // limpa o termo de busca
    onSelect(airport);
    inputRef.current.blur();    // opcional: remove foco para fechar teclado móvel
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className="bg-yellow-500 border p-2 rounded w-full text-blue-900 placeholder-blue-900"
      />

      {results.length > 0 && (
        <ul className="absolute left-0 right-0 bg-yellow-500 border rounded mt-1 shadow-lg z-10">
          {results.map(item => (
            <li
              key={item.iata_code}
              onClick={() => handleSelect(item)}
              className="p-2 cursor-pointer hover:bg-gray-200 text-blue-900"
            >
              {item.iata_code} – {item.name}, {item.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportPicker;
