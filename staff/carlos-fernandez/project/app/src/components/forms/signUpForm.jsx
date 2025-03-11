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
import { memo, useState, useEffect } from "react";
import { Errors } from "common";
import { FormErrorsSection } from "..";
import { Tooltip } from "react-tooltip";
import { showPassword } from "../../utils/showPasswordUtils.js";

function SignupForm({ className, onSubmit, formError }) {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (formError) {
      setErrors([formError]);
    }
  }, [formError]);

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

    if (
      !inputUsername.value ||
      !inputSurname.value ||
      !inputPhoneNumber.value ||
      !inputNif.value ||
      !inputEmail.value ||
      !inputPassword.value ||
      !inputRepeatPassword.value
    ) {
      setErrors([new Error("default")]); // Establecer error genérico
      return; // Detener el envío del formulario
    }

    try {
      onSubmit({
        username: inputUsername.value,
        surname: inputSurname.value,
        phoneNumber: inputPhoneNumber.value,
        nif: inputNif.value,
        email: inputEmail.value,
        password: inputPassword.value,
        repeatPassword: inputRepeatPassword.value,
      }).catch((error) => {
        if (error instanceof Errors.BadRequestError) return setErrors([error]);
        if (error instanceof Errors.ServerError) return setErrors([error]);
        if (error instanceof Errors.DuplicityError) return setErrors([error]);
        if (error instanceof Errors.NifNotValidError) return setErrors([error]);
        if (error instanceof Errors.ConfirmationError)
          return setErrors([error]);
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
      <div className="flex justify-center w-full rounded-lg">
        <div
          className={classNames(
            "animate-expandShadow w-[48rem] px-9 py-12 rounded-xl",
            className
          )}
        >
          <form onSubmit={submit}>
            <div className="grid mb-5">
              <IconSignup className="place-self-center w-16 h-16 text-textPinkColor" />
            </div>
            <h3 className="text-center mb-8 text-black">
              ¡Encantados de saber de ti!
            </h3>
            <fieldset className="mb-5">
              <legend className="mb-4 text-sm text-black">
                Por favor, introduce tus datos para crear tu usuario
              </legend>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconUsername fill="" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="username"
                  placeholder="Nombre"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconUsername fill="" />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  autoComplete="family-name"
                  placeholder="Apellidos"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPhone fill="" />
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  autoComplete="tel"
                  placeholder="Número de teléfono"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconNif fill="" />
                <input
                  type="text"
                  id="nif"
                  name="nif"
                  autoComplete="off"
                  placeholder="DNI/NIF"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconEmail fill="" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPassword fill="" />
                <Tooltip id="passwordTooltip" />
                <input
                  data-tooltip-id="passwordTooltip"
                  data-tooltip-content="Debe contener al menos 8 carácteres, mayúscula y carácteres especiales"
                  data-tooltip-place="top"
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Contraseña"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
                <button
                  className="swap swap-flip swap-active btn btn-xs p-2 btn-ghost btn-circle text-gray-400"
                  type="button"
                  data-showpassword="true"
                  onClick={() => showPassword("showpassword", "password")}
                >
                  <IconHidePassword className="swap-on w-6 h-6" />
                  <IconShowPassword className="swap-off w-6 h-6" />
                </button>
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPassword fill="" />
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  autoComplete="off"
                  placeholder="Repita la contraseña"
                  className="grow focus:text-gray-600  placeholder:text-gray-600 placeholder:text-opacity-90 text-black"
                />
                <button
                  className="swap swap-flip swap-active btn btn-xs p-2 btn-ghost btn-circle text-gray-400"
                  type="button"
                  data-showrepeatpassword="true"
                  onClick={() =>
                    showPassword("showrepeatpassword", "repeatPassword")
                  }
                >
                  <IconHidePassword className="swap-on w-6 h-6" />
                  <IconShowPassword className="swap-off w-6 h-6" />
                </button>
              </label>
            </fieldset>
            <FormErrorsSection errors={errors} className="mb-5" />

            <div className="mb-5 grid">
              <button
                type="submit"
                className="place-self-center btn bg-textPinkColor hover:bg-darkPink btn-block text-base"
              >
                Regístrate
              </button>
            </div>
            <div className="text-xs flex justify-end">
              <Link to="/login" target="_self" className="link link-secondary">
                Si ya tienes cuenta, inicia sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default memo(SignupForm);
