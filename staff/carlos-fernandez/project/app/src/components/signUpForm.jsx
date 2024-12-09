import { Link } from "react-router-dom";
import {
  IconEmail,
  IconHidePassword,
  IconLogin,
  IconPassword,
  IconShowPassword,
  IconSignup,
  IconUsername,
  IconPhone,
  IconNif,
} from "./icons";
import classNames from "classnames";
import { memo, useState } from "react";
import ES from "../locales/es.json";
import { Validator, Errors } from "common";
import { FormErrorsSection } from ".";

function SignupForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);

  const submit = (event) => {
    event.preventDefault();

    const {
      username: inputUsername,
      surname: inputsurname,
      phoneNumber: inputPhoneNumber,
      nif: inputNif,
      email: inputEmail,
      password: inputPassword,
      repeatPassword: inputRepeatPassword,
    } = event.target;

    const newErrors = [];
    if (!Validator.username(inputUsername)) {
      newErrors.push(new Errors.UsernameNotValidError("Username is not valid"));
      newErrors[newErrors.length - 1].order = 1;
      inputPhoneNumber.focus();
    }

    if (!Validator.surname(inputsurname)) {
      newErrors.push(new Errors.SurnameNotValidError("Surname is not valid"));
      newErrors[newErrors.length - 1].order = 2;
      inputPhoneNumber.focus();
    }

    if (!Validator.phoneNumber(inputPhoneNumber)) {
      newErrors.push(
        new Errors.PhoneNumberNotValidError("Phone number is not valid")
      );
      newErrors[newErrors.length - 1].order = 3;
      inputPhoneNumber.focus();
    }

    if (!Validator.nif(inputNif)) {
      newErrors.push(new Errors.NifNotValidError("DNI format is not valid"));
      newErrors[newErrors.length - 1].order = 4;
      inputPhoneNumber.focus();
    }

    if (!Validator.email(inputEmail)) {
      newErrors.push(
        new Errors.EmailNotValidError("Email format is not valid")
      );
      newErrors[newErrors.length - 1].order = 5;
      inputEmail.focus();
    }

    if (!Validator.password(inputPassword)) {
      newErrors.push(
        new Errors.PasswordNotValidError("Password format is not valid")
      );
      newErrors[newErrors.length - 1].order = 5;
      inputPassword.value = "";
      inputRepeatPassword.value = "";
      inputPassword.focus();
    }
    if (!(inputPassword.value === inputRepeatPassword.value)) {
      newErrors.push(
        new Errors.PasswordNotValidError("Las contraseñas no coindicen.")
      );
      newErrors[newErrors.length - 1].order = 5;
      inputPassword.value = "";
      inputRepeatPassword.value = "";
      inputPassword.focus();
    }

    setErrors(newErrors.length > 0 ? newErrors : null);

    if (newErrors.length === 0) {
      try {
        onSubmit({
          username: inputUsername.value,
          surname: inputsurname.value,
          phoneNumber: inputPhoneNumber.value,
          nif: inputNif.value,
          email: inputEmail.value,
          password: inputPassword.value,
          repeatPassword: inputRepeatPassword.value,
        }).catch((error) => {
          if (error instanceof Errors.BadRequestError)
            return setErrors([error]);
          if (error instanceof Errors.ServerError) return setErrors([error]);
          setErrors([new Errors.UnexpectedError()]);
        });
      } catch (error) {
        error.order = 1;
        setErrors([error]);
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

  //////////////////////////////////////////////////////////////////////////   CONSTRUCCIÓN FORMULARIO   ///////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="flex justify-center w-full rounded-lg">
        <div
          className={classNames(
            "bg-neutral-800 w-[48rem] px-9 py-12 rounded-lg",
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
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconUsername fill="white" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder={ES.signupForm.inputSurname.placeholder}
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPhone fill="white" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder={ES.signupForm.inputPhoneNumber.placeholder}
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconNif fill="white" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder={ES.signupForm.inputNif.placeholder}
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconEmail fill="white" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder={ES.signupForm.inputEmail.placeholder}
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPassword fill="white" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder={ES.signupForm.inputPassword.placeholder}
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPassword fill="white" />
                <input
                  type="text"
                  id="username"
                  name="username"
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
      </div>
    </>
  );
}

export default SignupForm;
