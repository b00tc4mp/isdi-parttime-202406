import { Validator, Errors } from "social-common";

/*

Ya no importamos esto desde /tools/errors, ya que hemos instalado social-common y lo importamos desde ahí

import {
  BadRequestError,
  DateOfBirthNotValidError,
  EmailNotValidError,
  PasswordNotValidError,
  ServerError,
  UnexpectedError,
  UsernameNotValidError,
} from "../tools/errors";*/

const registerUser = ({
  username,
  dateOfBirth,
  email,
  password,
  repeatPassword,
}) => {
  Validator.username(username);
  Validator.dateOfBirth(dateOfBirth);
  Validator.email(email);
  Validator.password(password);
  Validator.password(repeatPassword);
  Validator.confirmationPassword(password, repeatPassword);

  return fetch(`${process.env.REACT_APP_API_URL}users`, {
    method: "POST",
    body: JSON.stringify({
      username,
      "date-of-birth": dateOfBirth,
      email,
      password,
    }),
  })
    .then((res) => {
      if (!(res.ok === true)) throw new Errors.ServerError(res.json());

      return res.json();
    })
    .catch((error) => {
      if (error instanceof TypeError)
        throw new Errors.ServerError("Server is not connected");
      throw new error();
    });
};

export default registerUser;
