import { Errors, Validator } from "common";

import models from "../data/models.js";

const { User } = models;

export default (id, newPhoneNumber) => {
  Validator.id(id);
  Validator.phoneNumber(newPhoneNumber);

  return User.findById(id).then((user) => {
    if (!user) throw new Errors.ExistenceError("No user with this ID");

    return User.findByIdAndUpdate(id, { phoneNumber: newPhoneNumber })
      .then((updatedUser) => {
        if (!updatedUser)
          throw new Errors.UnexpectedError("Failed to update phone number");
        return updatedUser;
      })
      .catch((error) => {
        throw new Errors.UnexpectedError(error.message);
      });
  });
};
