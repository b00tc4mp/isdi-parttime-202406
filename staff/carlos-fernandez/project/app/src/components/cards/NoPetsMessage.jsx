import React from "react";

function NoPetsMessage({ onAddPet }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <p className="text-2xl text-gray-700 mb-4">
        Aún no tienes mascotas registradas
      </p>
      <button
        onClick={onAddPet}
        className="btn btn-primary bg-textPinkColor hover:bg-darkPink text-white px-6 py-2 rounded-lg"
      >
        Añadir mascota
      </button>
    </div>
  );
}

export default NoPetsMessage;
