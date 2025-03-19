import { useState, useRef, useEffect } from "react";
import DeleteConfirmation from "../modals/DeleteConfirmation";

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
  console.log(bookingId);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsDogListOpen(false);
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
  };

  const confirmDeleteBooking = async () => {
    const result = await DeleteConfirmation({
      title: "Eliminar reserva",
      text: "¿Estás seguro de que deseas eliminar esta reserva? Esta acción no se puede deshacer.",
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      onDeleteBooking();
      setIsDropdownOpen(false);
    }
  };

  const confirmRemoveDogs = async () => {
    if (selectedDogs.length === 0) {
      alert("Debes seleccionar al menos una mascota para eliminar.");
      return;
    }

    const result = await DeleteConfirmation({
      title: "Eliminar mascota(s)",
      text: "¿Seguro que quieres eliminar las mascotas seleccionadas de la reserva?",
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      onRemoveDog(bookingId, selectedDogs);
      setIsDogListOpen(false);
      setSelectedDogs([]);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* BOTÓN PRINCIPAL */}
      <button
        className="bg-textPinkColor hover:bg-darkPink text-white text-s rounded-md flex flex-col items-center justify-center 
        sm:w-24 sm:h-[90px] sm:mt-0
        xs:w-20 xs:h-16 xs:ml-2 xs:mt-2 "
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>Editar</span>
        <span>reserva</span>
      </button>

      {/* PRIMER DROPDOWN */}
      <ul
        className={`absolute top-full ml-2 mt-2 max-w-screen sm:w-52 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform z-50
        ${
          isDropDownOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <li key="delete-booking">
          <button
            className="w-full px-4 py-2 text-left text-black hover:bg-red-100 transition duration-300"
            onClick={confirmDeleteBooking}
          >
            ❌ Eliminar reserva
          </button>
        </li>
        <li key="delete-dogs">
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

      {/* SEGUNDO DROPDOWN - LISTA DE PERROS */}

      <div
        className={`absolute flex flex-col py-2 items-center justify-center top-full ml-2 mt-2 max-w-screen sm:w-52 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform z-50
        ${
          isDogListOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
        // Asegura que respeta la transición
      >
        <h3 className="text-center text-black">Selecciona tus mascotas</h3>
        <ul className="overflow-y-auto text-black">
          {dogs.map((dog) => (
            <li key={dog.id} className="flex items-center p-2 text-black">
              <input
                type="checkbox"
                id={dog.ig}
                checked={selectedDogs.includes(dog.id)}
                onChange={() => {
                  console.log("dog.id seleccionado:", dog.id);
                  handleSelectDog(dog.id);
                }}
              />
              <label htmlFor={dog.id} className="ml-2 cursos-pointer">
                {dog.dogName}
              </label>
            </li>
          ))}
        </ul>
        <button
          className="w-2/3 bg-red-500 text-white py-1 rounded mt-2 hover:bg-red-600"
          onClick={confirmRemoveDogs}
        >
          Eliminar mascotas seleccionadas
        </button>
      </div>
    </div>
  );
}

export default DeleteBookingButton;
