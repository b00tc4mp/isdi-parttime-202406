import { Link } from "react-router-dom";
import {
  IconEmail,
  IconHidePassword,
  IconLogin,
  IconPassword,
  IconShowPassword,
} from "../icons";
import { showPassword } from "../../utils/showPasswordUtils.js";
import classNames from "classnames";
import { memo, useState } from "react";
import { Errors } from "common";
import { FormErrorsSection } from "..";
import { CredentialsError } from "common/errors.js";

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
        if (err instanceof CredentialsError) {
          return setErrors(new Errors.CredentialsError());
        }
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

  return (
    <>
      <div className="flex justify-center w-full rounded-lg">
        <div
          className={classNames(
            " animate-expandShadow bg-customBackground input input-bordered max-w-screen-sm px-9 py-12 h-auto overflow-y",
            className
          )}
        >
          <form onSubmit={submit}>
            <div className="grid mb-5">
              <IconLogin className="place-self-center w-16 h-16 text-textPinkColor" />
            </div>
            <h3 className="text-center mb-8 text-xl text-black">
              Bienvenid@ de vuelta
            </h3>
            <fieldset className="mb-5">
              <legend className="mb-4 text-sm text-black">
                Introduce tus datos de inicio de sesión
              </legend>
              <label
                className={classNames(
                  "input input-bordered input-ghost glass flex items-center gap-2 mb-4"
                )}
              >
                <IconEmail fill="pink" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="grow focus:text-gray text-gray-700 placeholder:text-gray-600 placeholder:text-opacity-70"
                />
              </label>
              <label
                className={classNames(
                  "input input-bordered input-ghost glass flex items-center gap-2 mb-4"
                )}
              >
                <IconPassword fill="pink" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  className="grow focus:text-gray text-gray-700 placeholder:text-gray-600 placeholder:text-opacity-70"
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
      </div>
    </>
  );
}

export default memo(LoginForm);
