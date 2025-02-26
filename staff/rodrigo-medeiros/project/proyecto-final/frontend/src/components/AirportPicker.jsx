import React, { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import airports from "../airports";

const AirportPicker = ({ placeholder, onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  const fuse = new Fuse(airports, {
    keys: ["iata_code", "name", "city"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (query.length > 0) {
      setResults(fuse.search(query).map(result => result.item).slice(0, 5));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = (airport) => {
    setQuery(`${airport.iata_code} - ${airport.name}`);
    setResults([]);
    onSelect(airport);
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-yellow-500 border p-2 rounded w-full text-black placeholder-black"
      />
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 bg-yellow-500 border rounded mt-1 shadow-lg z-10">
          {results.map((item, index) => (
            <li
              key={item.iata_code}
              className="p-2 cursor-pointer hover:bg-gray-200 text-black"
              onMouseDown={(e) => {
                e.preventDefault(); // Prevents input from losing focus before selection
                handleSelect(item);
              }}
            >
              {item.iata_code} - {item.name}, {item.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportPicker;
