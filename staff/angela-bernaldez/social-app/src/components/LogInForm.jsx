import { Link } from "react-router-dom"
import { IconEmail, IconLogin, IconPassword } from "./icons"
import classNames from "classnames"
import {
  BadRequestError,
  CredentialsError,
  EmailNotValidError,
  PasswordNotValidError,
  ServerError,
  UnexpectedError,
  UsernameNotValidError,
} from "../tools/errors";
import { useState } from "react"
import { Validator } from "../tools"
import { FormErrorsSection } from ".";
import ES from "../locales/es.json";

function LogInForm({ className, onSubmit }) {
    const [errors, setErrors] = useState(null) // variable de lectura (errors), función de escritura (setErrors)

    const submit = (event) => {

        event.preventDefault()

        const { email: inputEmail, password: inputPassword } = event.target

        const newErrors = []

        // por que se pisan los mensjaes de error de email no valido 

        if (!Validator.email(inputEmail.value)) {
          newErrors.push(new EmailNotValidError("Email not valid"))
          newErrors[newErrors.length - 1].order = 2;
          inputEmail.focus()
        }

        if (!Validator.password(inputPassword.value)) {
          newErrors.push(new PasswordNotValidError("Password not valid"))
          newErrors[newErrors.length - 1].order = 1;
          inputPassword.focus()
        }

        setErrors(newErrors.length > 0 ? newErrors : null)

        if (newErrors.length === 0) 
          onSubmit({ 
            email: inputEmail.value, 
            password: inputPassword.value
        }).catch((err) => {
          if (err instanceof BadRequestError)
            return setErrors([new CredentialsError()]);
          if (err instanceof ServerError) return setErrors([err]);
          setErrors([new UnexpectedError()]);
        });
    }

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
                  placeholder={ES.loginForm.inputEmail}
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
  

export default LogInForm;