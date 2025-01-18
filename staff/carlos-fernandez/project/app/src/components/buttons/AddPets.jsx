import React, { useState } from "react";

function AddPets() {
  const [dogs, setDogs] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button onClick={() => setShowForm(true)}> Agregar mascotas </button>
      {showForm && <RegisterPetForm />}
    </div>
  );
}

export default AddPets;
