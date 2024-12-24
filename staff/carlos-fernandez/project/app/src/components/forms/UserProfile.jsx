import { Link } from "react-router-dom";
import {
  IconEmail,
  IconHidePassword,
  IconPassword,
  IconShowPassword,
  IconSignup,
  IconUsername,
  IconPhone,
  IconNif,
} from "../icons";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import getUser from "../../logic/getUser";

function UserProfile({ className, userData, onSubmit }) {
  const [errors, setErrors] = useState(null);
  const [userData, setUserData] = useState(null);

  const submit = (event) => {
    event.preventDefault();

    const {
      username: inputUsername,
      surname: inputSurname,
      phoneNumber: inputPhoneNumber,
      nif: inputNif,
      email: inputEmail,
      password: inputPassword,
      repeatPassword: inputRepeatPassword,
    } = event.target;

    const updatedData = {
      username: inputUsername.value,
      surname: inputSurname.value,
      phoneNumber: inputPhoneNumber.value,
      nif: inputNif.value,
      email: inputEmail.value,
      password: inputPassword.value,
      repeatPassword: inputRepeatPassword.value,
    };
    {
      /* ACTUALIZA LA INFO */
    }
    try {
      onSubmit(updatedData).catch((error) => {
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
  const showPassword = (buttonSelector, inputSelector) => {
    document
      .querySelectorAll(`[data-${buttonSelector}="true"]`)[0]
      .classList.toggle("swap-active");
    const element = document.getElementById(inputSelector);
    element.type = element.type === "text" ? "password" : "text";
  };

  //////////////////////////////////////////// EDITAR INFO ////////////////////////////////////////////

  return (
    <div className="flex justify-center w-full rounded-lg">
      <div
        className={classNames(
          "animate-expandShadow w-[48rem] px-9 py-12 rounded-xl",
          className
        )}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid mb-5">
            <IconSignup className="place-self-center w-16 h-16 text-textPinkColor" />
          </div>
          <h3 className="text-center mb-8 text-xl text-black">
            Edita tus datos
          </h3>
          <fieldset className="mb-5">
            <legend className="mb-4 text-sm text-black">
              Modifica los datos que desees actualizar
            </legend>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconUsername fill="" />
              <input
                type="text"
                id="username"
                name="username"
                defaultValue={userData.username}
                placeholder="Nombre"
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconUsername fill="" />
              <input
                type="text"
                id="surname"
                name="surname"
                defaultValue={userData.surname}
                placeholder="Apellidos"
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconPhone fill="" />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={userData.phoneNumber}
                placeholder="Número de teléfono"
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconNif fill="" />
              <input
                type="text"
                id="nif"
                name="nif"
                defaultValue={userData.nif}
                placeholder="DNI/NIF"
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconEmail fill="" />
              <input
                type="text"
                id="email"
                name="email"
                defaultValue={userData.email}
                placeholder="Email"
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
              />
            </label>
          </fieldset>

          <div className="mb-5 grid">
            <button
              type="submit"
              className="place-self-center btn bg-textPinkColor hover:bg-darkPink btn-block text-base"
            >
              Guardar cambios
            </button>
          </div>
          <div className="text-xs flex justify-end">
            <Link to="/" target="_self" className="link link-secondary">
              Volver a inicio
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
