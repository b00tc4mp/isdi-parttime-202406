import { Validator, Errors } from "common";
import bcrypt from "bcrypt";
import models from "../data/models.js";

const { User } = models;

export default (username, surname, phoneNumber, nif, email, password) => {
  console.log({ username, surname, phoneNumber, nif, email, password });
  Validator.username(username);
  Validator.surname(surname);
  Validator.phoneNumber(phoneNumber);
  Validator.nif(nif);
  console.log(Validator.nif(nif));
  Validator.email(email);
  Validator.password(password);

  //Buscamos por nif porque username no tiene porqué ser único
  return User.findOne({ nif: nif }).then((nif) => {
    console.log(User.findOne({ nif: nif }));
    if (nif) throw new Errors.DuplicityError("Nif already in use");
    return User.findOne({ email: email }).then((email) => {
      if (email) throw new Errors.DuplicityError("Email already in use");
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
          console.log("User to be created:", user); // Depuración adicional
          return User.create(user);
        })
        .catch((error) => {
          throw new Errors.UnexpectedError(error.message);
        });
    });
  });
};
