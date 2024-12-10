import { Link } from "react-router-dom"
import classNames from 'classnames'
import { useState } from 'react'
import { IconEmail, 
         IconHidePassword,
         IconLogIn,
         IconPassword,
         IconShowPassword } from './icons.jsx'
import { Errors } from 'common'
import { FormErrorsSection } from '.'

// Replace ES locales with corresponding text.

function LogInForm({ className, onSubmit }) {
    const [errors, setErrors] = useState(null)

    const submit = (event) => {
        event.preventDefault()

        const { email: inputEmail, password: inputPassword } = event.target

        // TODO: add validators for email and password

        try {
            onSubmit({
                email: inputEmail.value,
                password: inputPassword.value
            })
        } catch(error) {
            console.log(error)
        }
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
                <IconLogIn className="place-self-center w-16 h-16" />
              </div>
              <h3 className="text-center mb-8 text-xl">Welcome back</h3>
              <fieldset className="mb-5">
                <legend className="mb-4 text-sm">Introduce tus datos de inicio de sesión</legend>
                <label
                  className={classNames(
                    "input input-bordered input-ghost glass flex items-center gap-2 mb-4",
                    {
                      "input-error bg-error": errors?.some(
                        (error) => error instanceof Errors.EmailNotValidError
                      ),
                      "input-success bg-success":
                        errors instanceof Array &&
                        !errors?.some(
                          (error) => error instanceof Errors.EmailNotValidError
                        ),
                    }
                  )}
                >
                  <IconEmail fill="white" />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder='Email'
                    className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                  />
                </label>
                <label
                  className={classNames(
                    "input input-bordered input-ghost glass flex items-center gap-2",
                    {
                      "input-error bg-error": errors?.some(
                        (error) => error instanceof Errors.PasswordNotValidError
                      ),
                      "input-success bg-success":
                        errors instanceof Array &&
                        !errors?.some(
                          (error) => error instanceof Errors.PasswordNotValidError
                        ),
                    }
                  )}
                >
                  <IconPassword fill="white" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password'
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
                  Log In
                </button>
              </div>
              <div className="text-xs xs:flex xs:justify-between">
                <Link
                  to="/recovery-password"
                  target="_self"
                  className="link link-secondary max-xs:block max-xs:mb-4"
                >
                  Forgot your password?
                </Link>
                <Link
                  to="/sign-up"
                  target="_self"
                  className="link link-secondary max-xs:block"
                >
                  Sign Up Form
                </Link>
              </div>
            </form>
          </div>
        </>
      )

}

export default LogInForm