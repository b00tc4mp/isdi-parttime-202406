import { Link } from "react-router-dom";
import {
  IconEmail,
  IconHidePassword,
  IconPassword,
  IconShowPassword,
  IconSignup,
  IconUsername,
  IconPhone,
  IconNif,
} from "./icons";
import classNames from "classnames";
import { memo, useState } from "react";
import { Validator, Errors } from "common";
import { FormErrorsSection } from ".";
import { Tooltip } from "react-tooltip";

function SignupForm({ className, onSubmit }) {
  const [errors, setErrors] = useState(null);

  const submit = (event) => {
    event.preventDefault();

    const {
      username: inputUsername,
      surname: inputSurname,
      phoneNumber: inputPhoneNumber,
      nif: inputNif,
      email: inputEmail,
      password: inputPassword,
      repeatPassword: inputRepeatPassword,
    } = event.target;

    const newErrors = [];

    const regExp = /^[A-Z][a-z]+$/;

    if (!regExp.test(inputUsername.value)) {
      newErrors.push(new Errors.UsernameNotValidError("Username is not valid"));
      newErrors[newErrors.length - 1].order = 1;
      inputUsername.focus();
    }

    if (!regExp.test(inputSurname.value)) {
      newErrors.push(new Errors.SurnameNotValidError("Surname is not valid"));
      newErrors[newErrors.length - 1].order = 2;
      inputSurname.focus();
    }

    const strictPhoneRegex = /^\+?\d{1,3}\s?\(?\d{1,4}\)?[-.\s]?\d{3,10}$/;
    if (inputPhoneNumber.value.trim().length <= 0) {
      newErrors.push(
        new Errors.PhoneNumberNotValidError("Phone number is empty")
      );
      newErrors[newErrors.length - 1].order = 3;
      inputPhoneNumber.focus();
    } else if (!strictPhoneRegex.test(inputPhoneNumber.value)) {
      newErrors.push(
        new Errors.PhoneNumberNotValidError("Phone number format is not valid")
      );
      newErrors[newErrors.length - 1].order = 3;
      inputPhoneNumber.focus();
    }

    if (inputNif.value.length !== 9) {
      newErrors.push(new Errors.NifNotValidError("DNI format is not valid"));
      newErrors[newErrors.length - 1].order = 4;
      inputNif.focus();
    }

    const regExpEmail = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (inputEmail.value.trim().length <= 0) {
      newErrors.push(new Errors.EmailNotValidError("Email is empty"));
      newErrors[newErrors.length - 1].order = 5;
      inputEmail.focus();
    } else if (!regExpEmail.test(inputEmail.value)) {
      newErrors.push(
        new Errors.EmailNotValidError("Email format is not valid")
      );
      newErrors[newErrors.length - 1].order = 5;
      inputEmail.focus();
    }

    const regExpPassword = new RegExp(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;"'<>?,./~`-])(?=.{8,})/
    );
    if (inputPassword.value.trim().length <= 0) {
      newErrors.push(new Errors.PasswordNotValidError("Password is empty"));
      newErrors[newErrors.length - 1].order = 5;
      inputPassword.value = "";
      inputRepeatPassword.value = "";
      inputPassword.focus();
    } else if (!regExpPassword.test(inputPassword.value)) {
      newErrors.push(new Errors.PasswordNotValidError("Password is not valid"));
      newErrors[newErrors.length - 1].order = 5;
      inputPassword.value = "";
      inputRepeatPassword.value = "";
      inputPassword.focus();
    }
    if (!(inputPassword.value === inputRepeatPassword.value)) {
      newErrors.push(new Errors.ConfirmationError("Passwords doesn't match"));
      newErrors[newErrors.length - 1].order = 5;
      inputPassword.value = "";
      inputRepeatPassword.value = "";
      inputPassword.focus();
    }
    console.log(newErrors);
    setErrors(newErrors.length > 0 ? newErrors : null);

    if (errors === null) {
      try {
        onSubmit({
          username: inputUsername.value,
          surname: inputSurname.value,
          phoneNumber: inputPhoneNumber.value,
          nif: inputNif.value,
          email: inputEmail.value,
          password: inputPassword.value,
          repeatPassword: inputRepeatPassword.value,
        }).catch((error) => {
          console.log(error);
          if (error instanceof Errors.BadRequestError)
            return setErrors([error]);
          if (error instanceof Errors.ServerError) return setErrors([error]);
          setErrors([new Errors.UnexpectedError()]);
        });
      } catch (error) {
        console.log(error);
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
            <h3 className="text-center mb-8 text-xl">
              ¡Encantado de saber de ti!
            </h3>
            <fieldset className="mb-5">
              <legend className="mb-4 text-sm">
                Por favor, introduce tus datos para crear tu usuario
              </legend>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconUsername fill="white" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="username"
                  placeholder="Nombre"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconUsername fill="white" />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  autoComplete="family-name"
                  placeholder="Apellidos"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPhone fill="white" />
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  autoComplete="tel"
                  placeholder="Número de teléfono"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconNif fill="white" />
                <input
                  type="text"
                  id="nif"
                  name="nif"
                  autoComplete="off"
                  placeholder="DNI/NIF"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconEmail fill="white" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPassword fill="white" />
                <Tooltip id="passwordTooltip" />
                <input
                  data-tooltip-id="passwordTooltip"
                  data-tooltip-content="Debe contener al menos 8 carácteres, mayúscula y carácteres especiales"
                  data-tooltip-place="top"
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="off"
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
                  <IconShowPassword className="swap-of w-6 h-6" />
                </button>
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconPassword fill="white" />
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  autoComplete="off"
                  placeholder="Repita la contraseña"
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
                Regístrate
              </button>
            </div>
            <div className="text-xs flex justify-end">
              <Link to="/login" target="_self" className="link link-secondary">
                Si ya tienes cuenta, inicia sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
