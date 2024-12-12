import { Validator, Errors } from "common";
import bcrypt from "bcrypt";
import models from "../data/models.js";

const { User } = models;

export default (username, surname, phoneNumber, nif, email, password) => {
  Validator.username(username);
  Validator.surname(surname);
  Validator.phoneNumber(phoneNumber);
  Validator.nif(nif);
  Validator.email(email);
  Validator.password(password);

  //Buscamos por nif porque username no tiene porqué ser único
  return User.findOne({ nif: nif }).then((user) => {
    if (user) throw new Errors.DuplicityError("Nif already in use");
    return User.findOne({ email: email }).then((user) => {
      if (user) throw new Errors.DuplicityError("Email already in use");
      return bcrypt
        .hash(password, 10)
        .then((cryptPassword) => {
          const user = {
            username,
            surname,
            phoneNumber,
            nif,
            email,
            password: cryptPassword,
          };
          // Depuración adicional
          return User.create(user);
        })
        .catch((error) => {
          throw new Errors.UnexpectedError(error.message);
        });
    });
  });
};
