import { Link } from "react-router-dom";
import {
  IconEmail,
  IconHidePassword,
  IconLogin,
  IconPassword,
  IconShowPassword,
} from "./icons";
import classNames from "classnames";
import { memo, useState } from "react";
import { Errors, Validator } from "common";
import { FormErrorsSection } from ".";

function LoginForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);

  const submit = (event) => {
    event.preventDefault();

    const { email: inputEmail, password: inputPassword } = event.target;

    try {
      onSubmit({
        email: inputEmail.value,
        password: inputPassword.value,
      }).catch((err) => {
        if (err instanceof Errors.BadRequestError)
          return setErrors([new Errors.CredentialsError()]);
        if (err instanceof Errors.ServerError) return setErrors([err]);
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

  return (
    <>
      <div
        className={classNames(
          "input input-bordered bg-neutral-800 max-w-screen-sm px-9 py-12 h-auto overflow-y",
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
                  /**{
                  "input-error bg-error": errors?.some(
                    (error) => error instanceof Errors.EmailNotValidError
                  ),
                  "input-success bg-success":
                    error instanceof Array &&
                    !errors?.some(
                      (error) => error instanceof Errors.EmailNotValidError
                    ),
                } */
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
            <label
              className={classNames(
                "input input-bordered input-ghost glass flex items-center gap-2 mb-4"
              )}
            >
              <IconPassword fill="white" />
              <input
                type="password"
                id="password"
                name="password"
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
                <IconShowPassword className="swap-off w-6 h-6" />
              </button>
            </label>
          </fieldset>
          <FormErrorsSection errors={errors} className="mb-5" />
          <div className="mb-5 grid">
            <button
              type="submit"
              className="place-self-center btn btn-primary btn-block text-base"
            >
              Inicia sesión
            </button>
          </div>
          <div className="text-xs xs:flex xs:justify-between">
            <Link
              to="/recovery-password"
              target="_self"
              className="link link-secondary max-xs:block max-xs:mb-4"
            >
              Olvidé la contraseña
            </Link>
            <Link
              to="/sign-up"
              target="_self"
              className="link link-secondary max-xs:block"
            >
              Formulario de registro
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default memo(LoginForm);
