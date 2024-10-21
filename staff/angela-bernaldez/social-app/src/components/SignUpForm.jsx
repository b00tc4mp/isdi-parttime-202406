import { Link } from "react-router-dom"
import { IconEmail, IconLogin, IconPassword, IconCalendar, IconUser } from "./icons"
import classNames from "classnames"
import { EmailNotValidError } from "../tools/errors"
import { useState } from "react"

function LoginForm({ className, onSubmit }) {
    const [errors, setErrors] = useState(null) // variable de lectura (errors), función de escritura (setErrors)

    // en un componente tenemos:
    // presentacion: CSS
    // estructura: HTML
    // lógica front: javascript (la logica asociada al componente)

    // recoger datos y dejar que la lógica de negocio trate esos datos

    const submit = (event) => {
        // manejar lógica básica de front
        // validaciones síncronas de los datos 
        // enviar los datos en formato correcto al login
        // de alguna forma quedarse esperando órdenes del login
        event.preventDefault()

        const { email: inputEmail, password: inputPassword } = event.target
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
                  ? [..._errors, "El email no es válido"]
                  : ["El email no es válido"]
              );
              inputEmail.focus();
            }
          }
        };

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
                <IconLogin className="place-self-center w-16 h-16" />
              </div>
              <h3 className="text-center mb-8 text-xl">Únete a nuestra comunidad</h3>
              <fieldset className="mb-5">
                <legend className="mb-4 text-sm">
                  Introduce tus datos para crear usuario
                </legend>
                <label
                  className={classNames(
                    "input input-bordered input-ghost glass flex items-center gap-2 mb-4",
                    {
                      "input-error": errors,
                    }
                  )}
                >
                  <IconUser fill="white" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nombre de usuario"
                    className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                  />
                </label>
                <label
                    className={classNames(
                      "input input-bordered input-ghost glass flex items-center gap-2 mb-4",
                      {
                        "input-error": errors,
                      }
                    )}
                >
                  <IconCalendar fill="white" />
                  <input
                    type="text"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    placeholder="Fecha de nacimiento"
                    className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                  />
                </label>
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
                <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                  <IconPassword fill="white" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                  />
                </label >
                <label className="input input-bordered input-ghost glass flex items-center gap-2">
                  <IconPassword fill="white" />
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Repetir contraseña"
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
                <Link to="/login" target="_self" className="link link-primary">
                  Formulario de entrada
                </Link>
              </div>
            </form>
          </div>
        </>
      );
}

export default LoginForm;