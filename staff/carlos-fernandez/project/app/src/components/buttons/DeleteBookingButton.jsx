import { useState, useRef, useEffect } from "react";

function DeleteBookingButton({ onDelete }) {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-textPinkColor hover:bg-darkPink text-white text-s rounded-md flex flex-col items-center justify-center 
        sm:w-24 sm:h-[90px] sm:ml-4 sm:mt-4
        xs:w-20 xs:h-16 xs:ml-2 xs:mt-2 "
        onClick={toggleDropdown}
      >
        <span>Editar</span>
        <span>reserva</span>
      </button>

      <ul
        className={`absolute right-0 mt-2 w-52 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform
        ${
          isDropDownOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <li>
          <button
            className="w-full px-4 py-2 text-left text-black hover:bg-red-100 transition duration-300"
            onClick={() => {
              onDelete();
              setIsDropdownOpen(false);
            }}
          >
            ❌ Eliminar reserva
          </button>
        </li>
        <li>
          <button
            className="w-full px-4 py-2 text-left text-black hover:bg-blue-100 transition duration-300"
            onClick={() => {
              console.log("Eliminar mascotas");
              setIsDropdownOpen(false);
            }}
          >
            🐶 Eliminar mascotas
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DeleteBookingButton;
