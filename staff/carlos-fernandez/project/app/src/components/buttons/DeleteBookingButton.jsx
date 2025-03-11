import { useState, useRef, useEffect } from "react";

function DeleteBookingButton({
  bookingId,
  onDeleteBooking,
  dogs,
  onRemoveDog,
}) {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const [isDogListOpen, setIsDogListOpen] = useState(false);
  const [selectedDogs, setSelectedDogs] = useState([]);
  const dropdownRef = useRef(null);

  console.log("Perros en la reserva:", dogs);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectDog = (dogId) => {
    setSelectedDogs((prev) => {
      if (prev.includes(dogId)) {
        return prev.filter((id) => id !== dogId);
      } else {
        return [...prev, dogId];
      }
    });
    console.log("selectedDogs despues de handleSelectDog:", selectedDogs); // Inspeccionar selectedDogs después de la actualización
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-textPinkColor hover:bg-darkPink text-white text-s rounded-md flex flex-col items-center justify-center 
        sm:w-24 sm:h-[90px] sm:mt-0
        xs:w-20 xs:h-16 xs:ml-2 xs:mt-2 "
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>Editar</span>
        <span>reserva</span>
      </button>

      <ul
        className={`absolute top-full ml-2 mt-2 max-w-screen sm:w-52 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform z-50
        ${
          isDropDownOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <li>
          <button
            className="w-full px-4 py-2 text-left text-black hover:bg-red-100 transition duration-300"
            onClick={() => {
              onDeleteBooking();
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
              setIsDogListOpen((prev) => !prev);
              setIsDropdownOpen(false);
            }}
          >
            🐶 Eliminar mascotas
          </button>
        </li>
      </ul>

      {/* Lista de mascotas a eliminar */}
      {isDogListOpen && (
        <div>
          <h3 className="text-center text-black">Selecciona mascotas</h3>
          <ul className="overflow-y-auto text-black">
            {dogs.map((dog) => (
              <li
                key={dog.id}
                className="flex items-center p-2 text-black hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  id={dog.ig}
                  checked={selectedDogs.includes(dog._id)}
                  onChange={() => {
                    console.log("dog.id seleccionado:", dog._id);
                    handleSelectDog(dog._id);
                  }}
                />
                <label htmlFor={dog._id} className="ml-2 cursos-pointer">
                  {dog.dogName}
                </label>
              </li>
            ))}
          </ul>
          <button
            className="w-full bg-red-500 text-white py-1 rounded mt-2 hover:bg-red-600"
            onClick={() => {
              console.log("selectedDogs antes de onRemoveDog:", selectedDogs); // Inspeccionar selectedDogs antes de onRemoveDog
              onRemoveDog(bookingId, selectedDogs);
              setIsDogListOpen(false);
              setSelectedDogs([]);
            }}
          >
            Eliminar mascotas seleccionadas
          </button>
        </div>
      )}
    </div>
  );
}

export default DeleteBookingButton;
