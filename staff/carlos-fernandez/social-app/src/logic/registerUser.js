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
    throw new PasswordNotValidError(
      "Password and repeatPassword do not match."
    );
  if (password === repeatPassword && !Validator.password(password))
    throw new PasswordNotValidError("Password is not valid");
  if (!Validator.email(email)) throw new EmailNotValidError("Email not valid");
  if (!Validator.username(username))
    throw new UsernameNotValidError("Username not valid");

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
        throw new BadRequestError("Credentials not found");
      if (res.status >= 500 && res.status < 600)
        throw new ServerError("Server not work as expected");
      if (!(res.status >= 200 && res.status < 300)) throw new UnexpectedError();
      if (!(res.ok === true)) throw new UnexpectedError();

      return res.json();
    })
    .then((data) => data.id)
    .catch((err) => {
      if (err instanceof TypeError)
        throw new ServerError("Server is not connected");
      throw new UnexpectedError();
    });
};

export default registerUser;
