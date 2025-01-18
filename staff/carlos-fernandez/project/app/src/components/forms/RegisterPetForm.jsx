import { Link } from "react-router-dom";
import React, { useState } from "react";
import classNames from "classnames";
import { Errors } from "common";
import { FormErrorsSection } from "..";

function RegisterPetForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);
  const submit = (event) => {
    event.preventDefault();
    const {
      chip: inputChip,
      dogName: inputDogName,
      breed: inputBreed,
      birthDate: inputBirthDate,
      sociability: inputSociability,
      disease: inputDisease,
      allergy: inputAllergy,
    } = event.target;

    try {
      onSubmit({
        chip: inputChip.value,
        dogName: inputDogName.value,
        breed: inputBreed.value,
        birthDate: inputBirthDate.value,
        sociability: inputSociability.value,
        disease: inputDisease.value,
        allergy: inputAllergy.value,
      }).catch((error) => {
        if (error instanceof Errors.BadRequestError) return setErrors([error]);
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
}
