import { Link } from "react-router-dom";
import classNames from "classnames";
import { memo, useState } from "react";
import ES from "../locales/es.json";
import { Validator, Errors } from "common";
import { FormErrorsSection } from ".";
import moment from "moment";

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

    if (!(inputPassword.value === inputRepeatPassword.value)) {
      newErrors.push(
        new Errors.PasswordNotValidError("Las contraseñas no coindicen.")
      );
    }
  };
}
