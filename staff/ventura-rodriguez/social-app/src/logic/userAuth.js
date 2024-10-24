import { Validator } from "../tools";
import {
  BadRequestError,
  EmailNotValidError,
  PasswordNotValidError,
  ServerError,
  UnexpectedError,
} from "../tools/errors";

const userAuth = (email, password) => {
  if (!Validator.password(password))
    throw new PasswordNotValidError("Password is not valid");
  if (!Validator.email(email))
    throw new EmailNotValidError("Email is not valid");

  return fetch("http://localhost:3030/auth", {
    method: "GET",
  })
    .then((res) => {
      if (res.status >= 400 && res.status < 500)
        throw new BadRequestError("Credentials not found");
      if (res.status >= 500 && res.status < 600)
        throw new ServerError("Server not work as expected");
      if (!(res.status >= 200 && res.status < 300)) throw new UnexpectedError();
      if (!(res.ok === true)) throw new UnexpectedError();

      return res.json();
    })
    .then((data) => data.token)
    .catch((err) => {
      if (err instanceof TypeError)
        throw new ServerError("Server in not connected");
      throw new UnexpectedError();
    });
};

export default userAuth;
