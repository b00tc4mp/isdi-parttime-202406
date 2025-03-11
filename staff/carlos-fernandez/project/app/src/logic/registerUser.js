import { Validator, Errors } from "common";

const registerUser = ({
  username,
  surname,
  phoneNumber,
  nif,
  email,
  password,
  repeatPassword,
}) => {
  Validator.username(username);
  Validator.surname(surname);
  Validator.phoneNumber(phoneNumber);
  Validator.nif(nif);
  Validator.email(email);
  Validator.password(password);
  Validator.password(repeatPassword);
  Validator.confirmationPassword(password, repeatPassword);

  const user = {
    username,
    surname,
    phoneNumber,
    nif,
    email,
    password,
  };

  return fetch(`${import.meta.env.VITE_APP_API_URL}users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 201) return;
      return res.json().then((body) => {
        const constructor = Errors[body.name];
        console.log("RESPUESTA", res.status);
        console.log("CONSTRUCTOR", constructor);
        if (res.status === 409 && constructor === Errors.DuplicityError) {
          throw new Errors.DuplicityError(body.message);
        }
        if (constructor === Errors.ConfirmationError) {
          throw new Errors.ConfirmationError(body.message);
        }
        throw new constructor(`${body.message}`);
      });
    })
    .catch((error) => {
      if (error instanceof TypeError)
        throw new Errors.ServerError("Server is not connected");
      throw error;
    });
};

export default registerUser;
