import React from "react";
import deleteDog from "../../logic/deleteDog";

function PetCard({ pet, refreshPets }) {
  const handleDeleteDog = () => {
    console.log("MASCOTA A ELIMINAR:", pet._id);
    deleteDog(pet._id)
      .then(() => {
        alert("Mascota eliminada correctamente");
        refreshPets(); //Actualizamos la lista de mascotas
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Formatear la fecha de nacimiento (si existe)
  const formatDate = (dateString) => {
    if (!dateString) return "Fecha no disponible";
    const fecha = new Date(dateString);
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  };

  ////////////////////////////////// COMPONENTE //////////////////////////////////
  return (
    <div className="p-8">
      <div className=" bg-customBackgroundBlue border border-gray-300 rounded-2xl shadow-lg p-6 w-full max-w-screen-sm">
        <div className="flex justify-between">
          <h2 className="text-black font-bold text-3xl mb-2">{pet.dogName}</h2>
          <button
            className=" btn-primary bg-textPinkColor hover:bg-darkPink text-white px-6 py-2 rounded-lg "
            onClick={handleDeleteDog}
          >
            Eliminar
          </button>
        </div>
        <div className="flex w-full max-w-screen-md">
          <div className="w-1/2">
            <p>
              <strong className="text-black">Chip:</strong>
              <label className="input input-bordered flex items-center gap-2 mb-2 mr-2">
                <input
                  type="text"
                  id="chip"
                  name="chip"
                  autoComplete="chip"
                  placeholder={pet.chip}
                  className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                  readOnly={true}
                />
              </label>
            </p>
            <p>
              <strong className="text-black">Raza:</strong>
              <label className="input input-bordered flex items-center gap-2 mb-2 mr-2">
                <input
                  type="text"
                  id="breed"
                  name="breed"
                  autoComplete="breed"
                  placeholder={pet.breed}
                  className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                  readOnly={true}
                />
              </label>
            </p>
            <p>
              <strong className="text-black">Fecha de nacimiento:</strong>
              <label className="input input-bordered flex items-center gap-2 mb-2 mr-2">
                <input
                  type="text"
                  id="birthDate"
                  name="birthDate"
                  autoComplete="birthDate"
                  placeholder={formatDate(pet.birthDate)}
                  className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                  readOnly={true}
                />
              </label>
            </p>
          </div>
          <div className="w-1/2">
            <p>
              <strong className="text-black">¿Sociable?</strong>
              <label className="input input-bordered flex items-center gap-2 mb-2 mr-2">
                <input
                  type="text"
                  id="sociability"
                  name="sociability"
                  autoComplete="sociability"
                  placeholder={pet.sociability ? "Sí" : "No"}
                  className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                  readOnly={true}
                />
              </label>
            </p>
            <p>
              <strong className="text-black">Enfermedades:</strong>
              <label className="input input-bordered flex items-center gap-2 mb-2 mr-2">
                <input
                  type="text"
                  id="disease"
                  name="disease"
                  autoComplete="disease"
                  placeholder={pet.disease}
                  className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                  readOnly={true}
                />
              </label>
            </p>
            <p>
              <strong className="text-black">Alergias:</strong>
              <label className="w-auto input input-bordered flex items-center gap-2 mb-2 mr-2">
                <input
                  type="text"
                  id="allergy"
                  name="allergy"
                  autoComplete="allergy"
                  placeholder={pet.allergy}
                  className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                  readOnly={true}
                />
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
