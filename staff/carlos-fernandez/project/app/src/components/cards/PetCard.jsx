import React from "react";

function PetCard({ pet }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2>{pet.name}</h2>
      <p className="text-2xl text-gray-700 mb-4">Raza: {pet.breed}</p>
      <p className="text-2xl text-gray-700 mb-4">Chip: {pet.chip}</p>
      <p className="text-2xl text-gray-700 mb-4">Nombre: {pet.dogName}</p>
      <p className="text-2xl text-gray-700 mb-4">
        Fecha de nacimiento: {pet.birthDate}
      </p>
      <p className="text-2xl text-gray-700 mb-4">
        ¿Es sociable? {pet.sociability ? "Sí" : "No"}
      </p>
    </div>
  );
}

export default PetCard;
