import { Link } from "react-router-dom";
import {
  IconEmail,
  IconLogin,
  IconPassword,
  IconCalendar,
  IconUser,
} from "./icons";
import classNames from "classnames";
import { EmailNotValidError } from "../tools/errors";
import { useState } from "react";
import ES from "../locales/es.json";

function SignupForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    onSubmit(event);
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
          <h3 className="text-center mb-8 text-xl">{ES.signupForm.title}</h3>
          <fieldset className="mb-5">
            <legend className="mb-4 text-sm">{ES.signupForm.subtitle}</legend>
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
                placeholder={ES.signupForm.inputUsername}
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
                placeholder={ES.signupForm.inputDateOfBirth}
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
                placeholder={ES.signupForm.inputEmail}
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconPassword fill="white" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder={ES.signupForm.inputPassword}
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
            <label className="input input-bordered input-ghost glass flex items-center gap-2">
              <IconPassword fill="white" />
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                placeholder={ES.signupForm.inputRepeatPassword}
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
              {ES.signupForm.submitButton}
            </button>
          </div>
          <div className="text-xs flex justify-end">
            <Link to="/login" target="_self" className="link link-primary">
              {ES.signupForm.linkToLoginPage}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
