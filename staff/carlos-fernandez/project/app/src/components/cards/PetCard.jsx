import React from "react";

function PetCard({ pet }) {
  return (
    <div className="bg-customBackgroundDarker border border-gray-300 rounded-2xl shadow-lg p-6 w-full max-w-screen-md">
      <h2 className="text-black font-bold text-3xl">{pet.dogName}</h2>
      <div className="flex w-full max-w-screen-md">
        <div className="w-1/2">
          <p>
            <strong className="text-black">Chip:</strong>
            <label className="input input-bordered flex items-center gap-2 mb-2">
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
            <label className="input input-bordered flex items-center gap-2 mb-2">
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
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <input
                type="text"
                id="birthDate"
                name="birthDate"
                autoComplete="birthDate"
                placeholder={pet.birthDate}
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                readOnly={true}
              />
            </label>
          </p>
        </div>
        <div className="w-1/2">
          <p>
            <strong className="text-black">¿Sociable?</strong>
            <label className="input input-bordered flex items-center gap-2 mb-2">
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
            <label className="input input-bordered flex items-center gap-2 mb-2">
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
            <label className="w-auto input input-bordered flex items-center gap-2 mb-2">
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
  );
}

export default PetCard;
