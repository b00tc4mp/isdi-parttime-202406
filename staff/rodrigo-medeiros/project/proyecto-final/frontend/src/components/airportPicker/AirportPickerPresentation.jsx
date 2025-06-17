// src/components/AirportPickerPresentation.jsx
import React from "react";

const AirportPickerPresentation = ({
  placeholder,
  inputValue,
  results,
  onInputChange,
  onItemSelect,
  inputRef
}) => (
  <div className="relative w-full">
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={e => onInputChange(e.target.value)}
      className="bg-yellow-500 border p-2 rounded w-full text-blue-900 placeholder-blue-900"
    />

    {results.length > 0 && (
      <ul className="absolute left-0 right-0 bg-yellow-500 border rounded mt-1 shadow-lg z-10">
        {results.map(item => (
          <li
            key={item.iata_code}
            onClick={() => onItemSelect(item)}
            className="p-2 cursor-pointer hover:bg-gray-200 text-blue-900"
          >
            {item.iata_code} – {item.name}, {item.city}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default AirportPickerPresentation;
