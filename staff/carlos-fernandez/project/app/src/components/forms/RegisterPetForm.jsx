import React, { useState } from "react";
import classNames from "classnames";
import { Errors } from "common";
import { FormErrorsSection } from "..";

function RegisterPetForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);

  const submit = (event) => {
    event.preventDefault();

    const form = event.target;
    const {
      chip: inputChip,
      dogName: inputDogName,
      breed: inputBreed,
      birthDate: inputBirthDate,
      sociability: inputSociability,
      disease: inputDisease,
      allergy: inputAllergy,
    } = form;

    const dogData = {
      chip: inputChip.value,
      dogName: inputDogName.value,
      breed: inputBreed.value,
      birthDate: inputBirthDate.value,
      sociability: inputSociability.checked,
      disease: inputDisease.value,
      allergy: inputAllergy.value,
    };

    console.log("Data being sent:", dogData); // Verificar datos enviados

    // Enviamos los datos
    try {
      onSubmit(dogData)
        .then(() => {
          form.reset();
          setErrors(null);
        })
        .catch((error) => {
          if (error instanceof Errors.BadRequestError)
            return setErrors([error]);
          if (error instanceof Errors.ServerError) return setErrors([error]);
          setErrors([new Errors.UnexpectedError()]);
        });
    } catch (error) {
      error.order = 1;
      console.log(error);
      setErrors([error]);
    }
  };
  ////////////////////////////////////////////   CONSTRUCCIÓN FORMULARIO   ////////////////////////////////////////////

  return (
    <>
      <div className="flex justify-center w-full rounded-lg py-8">
        <div
          className={classNames(
            "animate-expandShadow min-w-fit px-10 py-8 rounded-xl",
            className
          )}
        >
          <form onSubmit={submit}>
            <h3 className="text-center m-8 text-black text-3xl font-bold">
              ¡Encantados de conocer a tu familia!
            </h3>
            <fieldset className="mb-5">
              <legend className="mb-4 text-sm text-black">
                Por favor, introduce los datos de tu mascota
              </legend>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <input
                  type="text"
                  id="chip"
                  name="chip"
                  autoComplete="chip"
                  placeholder="Chip"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <input
                  type="text"
                  id="dogName"
                  name="dogName"
                  autoComplete="dog-name"
                  placeholder="Nombre de tu mascota"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <input
                  type="text"
                  id="breed"
                  name="breed"
                  autoComplete="breed"
                  placeholder="Raza de tu mascota"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4 relative">
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  autoComplete="birth-date"
                  placeholder="Fecha de nacimiento de tu mascota"
                  className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90 text-black appearance-none"
                  onFocus={(e) => (e.target.type = "date")} // Cambia el tipo a 'date' cuando se enfoca
                  onBlur={(e) => (e.target.type = "text")} // Cambia el tipo a 'text' cuando se pierde el foco
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <span className="text-gray-600">
                  ¿Es sociable con otros perros?
                </span>
                <input
                  type="checkbox"
                  id="sociability"
                  name="sociability"
                  className="toggle-checkbox hidden"
                />
                <label
                  for="sociability"
                  className="toggle-label bg-gray-300 inline-block w-10 h-6 rounded-full relative cursor-pointer"
                >
                  <span className="toggle-dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform"></span>
                </label>
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <input
                  type="text"
                  id="disease"
                  name="disease"
                  autoComplete="disease"
                  placeholder="Enfermedad"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <input
                  type="text"
                  id="allergy"
                  name="allergy"
                  autoComplete="allergy"
                  placeholder="Alergias"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
            </fieldset>
            <FormErrorsSection errors={errors} className="mb-5" />

            <div className="mb-5 grid">
              <button
                type="submit"
                className="place-self-center btn bg-textPinkColor hover:bg-darkPink btn-block text-base"
              >
                Registrar mascota
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPetForm;
