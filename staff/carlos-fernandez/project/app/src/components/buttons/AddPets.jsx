import React, { useState } from "react";
import RegisterPetForm from "../forms/RegisterPetForm";

function AddPets({ onSubmit }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className=" btn fixed btn-primary bg-textPinkColor hover:bg-darkPink text-white px-6 py-2 rounded-lg ml-5 mt-5 mb-5"
      >
        {" "}
        Agregar mascotas{" "}
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          showForm ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {showForm && <RegisterPetForm onSubmit={onSubmit} />}
      </div>
    </div>
  );
}

export default AddPets;
