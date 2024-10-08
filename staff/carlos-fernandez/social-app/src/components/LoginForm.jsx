import { Link } from "react-router-dom";
import { IconEmail, IconLogin, IconPassword } from "./icons";
import classNames from "classnames";
import { EmailNotValidError } from "../tools/errors";
import { useState } from "react";

function LoginForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);
  // recopiar datos y dejar que la lógica de negocio trate esos datos

  const submit = (event) => {
    // manejar la lógica básica de front
    // validaciones síncronas de los datos
    // eniar los datos en formato correcto al Login
    // de alguna forma quedarse esperando órdenes del login
    event.preventDefault();

    const { email: inputEmail, password: inputPassword } = event.target;

    const emailRegexp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    try {
      if (!emailRegexp.test(inputEmail.value))
        throw new EmailNotValidError("Email is not valid");

      onSubmit(event);
    } catch (error) {
      if (error.constructor.name === "EmailNotValidError") {
        setErrors((_errors) =>
          _errors
            ? [..._errors, "El email no es váido"]
            : ["El email no es váido"]
        );
        inputEmail.focus();
      }
    }
  };

  return (
    <>
      <div
        className={classNames(
          "bg-primary-800 max-w-screen-sm px-9 py-12 shadow-box",
          className
        )}
      >
        <form onSubmit={submit}>
          <div className="grid mb-5">
            <IconLogin className="place-self-center w-16 h-16" />
          </div>
          <h3 className="text-center mb-8 text-xl">Bienvenido de vuelta</h3>
          <fieldset className="mb-5">
            <legend className="mb-4 text-sm">
              Introduce tus datos de inicio de sesión
            </legend>
            <label
              className={classNames(
                "input input-bordered input-ghost glass flex items-center gap-2 mb-4",
                {
                  "input-error": errors,
                }
              )}
            >
              <IconEmail fill="white" />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2">
              <IconPassword fill="white" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
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
              Iniciar sesión
            </button>
          </div>
          <div className="text-xs flex justify-between">
            <Link
              to="/recovery-password"
              target="_self"
              className="link link-secondary"
            >
              ¿Has olvidado la contraseña?
            </Link>
            <Link to="/sign-up" target="_self" className="link link-secondary">
              Formulario de registro
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
