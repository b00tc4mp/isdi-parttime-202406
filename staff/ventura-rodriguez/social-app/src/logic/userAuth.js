import { Validator } from "../tools";
import { EmailNotValidError, PasswordNotValidError } from "../tools/errors";

const userAuth = (email, password) => {
  if (!Validator.password(password))
    throw new PasswordNotValidError("Password is not valid");
  if (!Validator.email(email))
    throw new EmailNotValidError("Email is not valid");

  // petition http POST

  // Cualquier petición HTTP es asíncrona

  // Recibiremos una respuesta y con eso actuaremos

  // esperamos que consulte con una BBDD y mire si el usuario con email X tiene la password Y

  // que el emial no exista
  // que el email exista pero el password no sea correcto
  // que este todo bien
  console.log({ email, password });
};

export default userAuth;
