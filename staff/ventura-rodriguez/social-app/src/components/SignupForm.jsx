import { Link } from "react-router-dom";
import {
  IconDateOfBirth,
  IconEmail,
  IconPassword,
  IconSignup,
  IconUsername,
} from "./icons";
import classNames from "classnames";
import { useState } from "react";

function SignupForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  // nombre de usuario
  // edad

  return (
    <>
      <div
        className={classNames(
          "bg-neutral-800 max-w-screen-sm px-9 py-12",
          className
        )}
      >
        <form onSubmit={submit}>
          <div className="grid mb-5">
            <IconSignup className="place-self-center w-16 h-16" />
          </div>
          <h3 className="text-center mb-8 text-xl">
            Únete a nuestra comunidad
          </h3>
          <fieldset className="mb-5">
            <legend className="mb-4 text-sm">
              Introduce tus datos para crear su usuario
            </legend>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconUsername fill="white" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Nombre de usuario"
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconDateOfBirth fill="white" />
              <input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Fecha de nacimiento"
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconEmail fill="white" />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconPassword fill="white" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2">
              <IconPassword fill="white" />
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                placeholder="Repita la contraseña"
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
          </fieldset>
          <div id="show-errors">
            <span>{errors}</span>
          </div>
          <div className="mb-5 grid">
            <button
              type="submit"
              className="place-self-center btn btn-primary btn-block text-base"
            >
              Registrarse
            </button>
          </div>
          <div className="text-xs flex justify-end">
            <Link to="/login" target="_self" className="link link-secondary">
              Formulario de entrada
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
