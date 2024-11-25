import { Errors, Validator } from "social-common";
import data from "../data/index.js";

export default (id, newEmail) => {
  //Validate email format
  Validator.email(newEmail);

  return data.users
    .findByIdAndUpdate(id, { $set: { email: newEmail } })
    .then((info) => {
      if (info.matchedCount !== 1)
        throw new Errors.AuthError("User id doesn't belong to anyone");
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
