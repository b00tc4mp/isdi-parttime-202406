import React from "react";
import deleteDog from "../../logic/deleteDog.js";
import { formatDate } from "../../utils/formatDateUtils.js";
import DeleteConfirmation from "../modals/DeleteConfirmation.jsx";

function PetCard({ pet, refreshPets }) {
  const confirmRemoveDog = async () => {
    const result = await DeleteConfirmation({
      title: "Eliminar mascota",
      text: `¿Seguro que quieres eliminar a ${pet.dogName}?`,
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      deleteDog(pet._id)
        .then(() => {
          refreshPets();
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  ////////////////////////////////// COMPONENTE //////////////////////////////////
  return (
    <div className="p-4">
      <div className=" bg-customBackgroundBlue border border-gray-300 rounded-2xl shadow-lg p-1 sm:p-6 ">
        {/* Contenedor principal en columna en móvil, fila en escritorio */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center mb-4">
          <h2 className="text-black font-bold text-xl sm:text-3xl ml-2 sm:ml-0">
            {pet.dogName}
          </h2>
          <button
            className="bg-textPinkColor hover:bg-darkPink text-white w-auto sm:w-[120px] px-4 py-1 sm:px-6 md:py-2 rounded-lg mt-2 sm:mt-0 ml-2 sm:ml-0"
            onClick={confirmRemoveDog}
          >
            Eliminar
          </button>
        </div>
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center">
          <div className="w-1/2">
            <p className="w-fit">
              <strong className="text-black ml-2 sm:ml-0">Chip:</strong>
              <label className="input input-bordered flex items-center gap-2  mb-2 mr-2 ml-2 sm:ml-0">
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
            <p className="w-fit">
              <strong className="text-black ml-2 sm:ml-0">Raza:</strong>
              <label className="input input-bordered flex items-center gap-2 mb-2 mr-2 ml-2 sm:ml-0">
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
            <p className="w-fit">
              <strong className="text-black ml-2 sm:ml-0">
                Fecha de nacimiento:
              </strong>
              <label className="input input-bordered flex items-center gap-2 mb-2 mr-2 ml-2 sm:ml-0">
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
            <p className="w-fit">
              <strong className="text-black ml-2 xs:ml-0">¿Sociable?</strong>
              <label className="input input-bordered flex items-center gap-2 mb-2 mr-0 xs:mr-2 ml-2 xs:ml-0">
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
            <p className="w-fit">
              <strong className="text-black ml-2 xs:ml-0">Enfermedades:</strong>
              <label className="input input-bordered flex items-center gap-2 mb-2 mr-0 xs:mr-2 ml-2 xs:ml-0">
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
            <p className="w-fit">
              <strong className="text-black ml-2 xs:ml-0">Alergias:</strong>
              <label className="w-auto input input-bordered flex items-center gap-2 mb-2 mr-0 xs:mr-2 ml-2 xs:ml-0">
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
