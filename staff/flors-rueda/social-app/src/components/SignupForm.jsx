import { Link } from "react-router-dom";
import {
  IconEmail,
  IconHidePassword,
  IconPassword,
  IconShowPassword,
  IconSignup,
  IconUsername,
} from "./icons";
import classNames from "classnames";
import { memo, useState } from "react";
import ES from "../locales/es.json";
import { Validator } from "../tools";
import {
  BadRequestError,
  DateOfBirthNotValidError,
  EmailNotValidError,
  PasswordNotValidError,
  ServerError,
  UnexpectedError,
  UsernameNotValidError,
} from "../tools/errors";
import { DatePicker, FormErrorsSection } from ".";
import moment from "moment";

function SignupForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);

  const submit = (event) => {
    event.preventDefault();

    const {
      username: inputUsername,
      dateOfBirth: inputDateOfBirth,
      email: inputEmail,
      password: inputPassword,
      repeatPassword: inputRepeatPassword,
    } = event.target;

    const newErrors = [];

    if (!(inputPassword.value === inputRepeatPassword.value)) {
      newErrors.push(
        new PasswordNotValidError("Password and repeatPassword do not match")
      );
      newErrors[newErrors.length - 1].order = 4;
      inputPassword.value = "";
      inputRepeatPassword.value = "";
      inputPassword.focus();
    }

    if (
      inputPassword.value === inputRepeatPassword.value &&
      !Validator.password(inputPassword.value)
    ) {
      newErrors.push(new PasswordNotValidError("Password is not valid"));
      newErrors[newErrors.length - 1].order = 4;
      inputPassword.focus();
    }

    if (!Validator.email(inputEmail.value)) {
      newErrors.push(new EmailNotValidError("Email is not valid"));
      newErrors[newErrors.length - 1].order = 3;
      inputEmail.focus();
    }

    if (!Validator.dateOfBirth(inputDateOfBirth.value)) {
      newErrors.push(new DateOfBirthNotValidError("DateOfBirth is not valid"));
      newErrors[newErrors.length - 1].order = 2;
      // inputDateOfBirth.focus();
    }

    if (!Validator.username(inputUsername.value)) {
      newErrors.push(new UsernameNotValidError("Username is not valid"));
      newErrors[newErrors.length - 1].order = 1;
      inputUsername.focus();
    }

    setErrors(newErrors.length > 0 ? newErrors : null);

    if (newErrors.length === 0) {
      try {
        onSubmit({
          username: inputUsername.value,
          dateOfBirth: inputDateOfBirth.value,
          email: inputEmail.value,
          password: inputPassword.value,
          repeatPassword: inputRepeatPassword.value,
        }).catch((err) => {
          if (err instanceof BadRequestError) return setErrors([err]);
          if (err instanceof ServerError) return setErrors([err]);
          setErrors([new UnexpectedError()]);
        });
      } catch (err) {
        err.order = 1;
        setErrors([err]);
      }
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
          "bg-neutral-800 max-w-screen-sm px-9 py-12",
          className
        )}
      >
        <form onSubmit={submit}>
          <div className="grid mb-5">
            <IconSignup className="place-self-center w-16 h-16" />
          </div>
          <h3 className="text-center mb-8 text-xl">{ES.signupForm.title}</h3>
          <fieldset className="mb-5">
            <legend className="mb-4 text-sm">{ES.signupForm.subtitle}</legend>
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconUsername fill="white" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder={ES.signupForm.inputUsername.placeholder}
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
            <DatePicker
              useRange={false}
              asSingle={true}
              placeholder={ES.signupForm.inputDateOfBirth.placeholder}
              className="mb-4"
              inputId="dateOfBirth"
              inputName="dateOfBirth"
              displayFormat="DD/MM/YYYY"
              startFrom={moment().subtract(18, "years").toDate()}
              maxDate={moment().subtract(18, "years").toDate()}
            />
            {/*  */}
            <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
              <IconEmail fill="white" />
              <input
                type="text"
                id="email"
                name="email"
                placeholder={ES.signupForm.inputEmail.placeholder}
                className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
              />
            </label>
            <div className="form-control mb-4">
              <label className="input input-bordered input-ghost glass flex items-center gap-2">
                <IconPassword fill="white" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder={ES.signupForm.inputPassword.placeholder}
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
              <div className="label">
                <span className="label-text-alt text-white">
                  {ES.signupForm.inputPassword.helpText}
                </span>
              </div>
            </div>
            <label className="input input-bordered input-ghost glass flex items-center gap-2">
              <IconPassword fill="white" />
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                placeholder={ES.signupForm.inputRepeatPassword.placeholder}
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
              {ES.signupForm.submitButton}
            </button>
          </div>
          <div className="text-xs flex justify-end">
            <Link to="/login" target="_self" className="link link-secondary">
              {ES.signupForm.linkToLoginPage}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default memo(SignupForm);
