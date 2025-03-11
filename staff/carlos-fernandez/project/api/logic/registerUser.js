import { Validator, Errors } from "common";
import bcrypt from "bcrypt";
import models from "../data/models.js";
import { DuplicityError } from "common/errors.js";

const { User } = models;

export default (username, surname, phoneNumber, nif, email, password) => {
  Validator.username(username);
  Validator.surname(surname);
  Validator.phoneNumber(phoneNumber);
  Validator.nif(nif);
  Validator.email(email);
  Validator.password(password);

  //Buscamos por nif porque username no tiene porqué ser único
  return User.findOne({ nif: nif })
    .then((existingNifUser) => {
      if (existingNifUser) {
        throw new Errors.DuplicityError("Nif already in use");
      }
      return User.findOne({ email: email });
    })
    .then((existingEmailUser) => {
      if (existingEmailUser) {
        throw new Errors.DuplicityError("Email already in use");
      }
      return User.findOne({ phoneNumber: phoneNumber });
    })
    .then((existingPhoneUser) => {
      if (existingPhoneUser) {
        throw new Errors.DuplicityError("Phone number already in use");
      }
      return bcrypt.hash(password, 10);
    })
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
      if (error instanceof DuplicityError) {
        throw error;
      }
      throw new Errors.UnexpectedError(error.message);
    });
};
