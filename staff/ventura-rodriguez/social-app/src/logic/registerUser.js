import { Validator } from "../tools";
import {
  BadRequestError,
  EmailNotValidError,
  PasswordNotValidError,
  ServerError,
  UnexpectedError,
  UsernameNotValidError,
} from "../tools/errors";

const registerUser = ({
  username,
  dateOfBirth,
  email,
  password,
  repeatPassword,
}) => {
  if (!(password === repeatPassword))
    throw new PasswordNotValidError("Password and repeatPassword do not match");
  if (password === repeatPassword && !Validator.password(password))
    throw new PasswordNotValidError("Password is not valid");
  if (!Validator.email(email))
    throw new EmailNotValidError("Email is not valid");
  // if (!Validator.email(email))
  //   throw new EmailNotValidError("Email is not valid");
  if (!Validator.username(username))
    throw new UsernameNotValidError("Username is not valid");

  return fetch("http://localhost:3030/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      dateOfBirth,
      email,
      password,
      repeatPassword,
    }),
  })
    .then((res) => {
      if (res.status >= 400 && res.status < 500)
        throw new BadRequestError("User was not registered");
      if (res.status >= 500 && res.status < 600)
        throw new ServerError("Server not work as expected");
      if (!(res.status === 201)) throw new UnexpectedError();
      if (!(res.ok === true)) throw new UnexpectedError();

      return res.json();
    })
    .then((data) => data.id)
    .catch((err) => {
      if (err instanceof TypeError)
        throw new ServerError("Server in not connected");
      throw new UnexpectedError();
    });
};

export default registerUser;
