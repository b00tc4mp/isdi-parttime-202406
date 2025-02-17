import React from "react";
import RegisterPetForm from "../forms/RegisterPetForm";

function AddPets({ onSubmit, onAddPet, isAddingPet }) {
  return (
    <div>
      <button
        onClick={onAddPet} // Ahora usa la función del padre
        className="btn border-0 fixed btn-primary bg-textPinkColor hover:bg-darkPink text-white px-6 py-2 rounded-lg ml-5 mt-5 mb-5"
      >
        {isAddingPet ? "Cerrar formulario" : "Agregar mascotas"}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isAddingPet ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isAddingPet && <RegisterPetForm onSubmit={onSubmit} />}
      </div>
    </div>
  );
}

export default AddPets;
