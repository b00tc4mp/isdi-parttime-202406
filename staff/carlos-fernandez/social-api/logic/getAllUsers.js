import { Errors } from "social-common";
import data from "../data/models.js";

export default (id) => {
  //ID valid?
  if (!ObjectId.isValid(id)) throw new Errors.ExistenceError("Id not valid");

  return data.users
    .findOne({ _id: new ObjectId(id) })
    .then((user) => {
      if (!user) throw new Errors.ExistenceError("User does not exist");
      return { username: user.username, dateOfBirth: user.dateOfBirth };
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
