import { Link } from "react-router-dom";
import { IconEmail, IconLogin, IconPassword } from "./icons";
import classNames from "classnames";
import { Validator } from "../tools";
import { useState } from "react";
import { EmailNotValidError, PasswordNotValidError } from "../tools/errors";
import { FormErrorsSection } from ".";
import ES from "../locales/es.json";

function LoginForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);
  // recopiar datos y dejar que la lógica de negocio trate esos datos

  const submit = (event) => {
    // manejar la lógica básica de front
    // de alguna forma quedarse esperando órdenes del login
    event.preventDefault();

    const { email: inputEmail, password: inputPassword } = event.target;

    const newErrors = [];

    if (!Validator.password(inputPassword.value)) {
      newErrors.push(new PasswordNotValidError("Password is not valid"));
      inputPassword.focus();
    }

    if (!Validator.email(inputEmail.value)) {
      newErrors.push(new EmailNotValidError("Email is not valid"));
      inputEmail.focus();
    }

    setErrors(newErrors.length > 0 ? newErrors : null);

    if (newErrors.length === 0)
      onSubmit({ email: inputEmail.value, password: inputPassword.value });

    // try {
    // } catch (error) {
    // }
  };

  return (
    <>
      <div
        className={classNames(
          "bg-neutral-800 max-w-screen-sm px-9 py-12 shadow-box",
          className
        )}
      >
        <form onSubmit={submit}>
          <div className="grid mb-5">
            <IconLogin className="place-self-center w-16 h-16" />
          </div>
          <h3 className="text-center mb-8 text-xl">{ES.loginForm.title}</h3>
          <fieldset className="mb-5">
            <legend className="mb-4 text-sm">{ES.loginForm.subtitle}</legend>
            <label
              className={classNames(
                "input input-bordered input-ghost glass flex items-center gap-2 mb-4",
                {
                  "input-error bg-error": errors?.some(
                    (error) => error instanceof EmailNotValidError
                  ),
                  "input-success bg-success":
                    errors instanceof Array &&
                    !errors?.some(
                      (error) => error instanceof EmailNotValidError
                    ),
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
                "input input-bordered input-ghost glass flex items-center gap-2",
                {
                  "input-error bg-error": errors?.some(
                    (error) => error instanceof PasswordNotValidError
                  ),
                  "input-success bg-success":
                    errors instanceof Array &&
                    !errors?.some(
                      (error) => error instanceof PasswordNotValidError
                    ),
                }
              )}
            >
              <IconPassword fill="white" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder={ES.loginForm.inputPassword}
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
          </fieldset>
          <FormErrorsSection errors={errors} className="mb-5" />
          <div className="mb-5 grid">
            <button
              type="submit"
              className="place-self-center btn btn-primary btn-block text-base"
            >
              {ES.loginForm.submitButton}
            </button>
          </div>
          <div className="text-xs xs:flex xs:justify-between">
            <Link
              to="/recovery-password"
              target="_self"
              className="link link-secondary max-xs:block max-xs:mb-4"
            >
              {ES.loginForm.linkToForgotPasswordPage}
            </Link>
            <Link
              to="/sign-up"
              target="_self"
              className="link link-secondary max-xs:block"
            >
              {ES.loginForm.linkToSignupPage}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
