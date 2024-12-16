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
} from "./icons";
import classNames from "classnames";
import { memo, useState } from "react";
import { Validator, Errors } from "common";
import { FormErrorsSection } from ".";
import { Tooltip } from "react-tooltip";

function SignupForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);

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

  //////////////////////////////////////////////////////////////////////////   CONSTRUCCIÓN FORMULARIO   ///////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="flex justify-center w-full rounded-lg">
        <div
          className={classNames(
            "custom-box w-[48rem] px-9 py-12 rounded-xl",
            className
          )}
        >
          <form onSubmit={submit}>
            <div className="grid mb-5">
              <IconSignup className="place-self-center w-16 h-16" />
            </div>
            <h3 className="text-center mb-8 text-xl text-black">
              ¡Encantado de saber de ti!
            </h3>
            <fieldset className="mb-5">
              <legend className="mb-4 text-sm text-black">
                Por favor, introduce tus datos para crear tu usuario
              </legend>
              <label className="input  input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconUsername fill="white" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="username"
                  placeholder="Nombre"
                  className="grow focus:text-black placeholder:text-black placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconUsername fill="white" />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  autoComplete="family-name"
                  placeholder="Apellidos"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPhone fill="white" />
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  autoComplete="tel"
                  placeholder="Número de teléfono"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconNif fill="white" />
                <input
                  type="text"
                  id="nif"
                  name="nif"
                  autoComplete="off"
                  placeholder="DNI/NIF"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconEmail fill="white" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPassword fill="white" />
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
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
                <button
                  className="swap swap-flip swap-active btn btn-xs p-2 btn-ghost btn-circle text-white"
                  type="button"
                  data-showpassword="true"
                  onClick={() => showPassword("showpassword", "password")}
                >
                  <IconHidePassword className="swap-on w-6 h-6" />
                  <IconShowPassword className="swap-of w-6 h-6" />
                </button>
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPassword fill="white" />
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  autoComplete="off"
                  placeholder="Repita la contraseña"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
                <button
                  className="swap swap-flip swap-active btn btn-xs p-2 btn-ghost btn-circle text-white"
                  type="button"
                  data-showrepeatpassword="true"
                  onClick={() =>
                    showPassword("showrepeatpassword", "repeatPassword")
                  }
                >
                  <IconHidePassword className="swap-on w-6 h-6" />
                  <IconShowPassword className="swap-of w-6 h-6" />
                </button>
              </label>
            </fieldset>
            <FormErrorsSection errors={errors} className="mb-5" />

            <div className="mb-5 grid">
              <button
                type="submit"
                className="place-self-center btn btn-primary btn-block text-base"
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
