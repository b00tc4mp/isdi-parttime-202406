import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User } = models;

export default (id, username) => {
  Validator.id(id);
  Validator.username(username);

  //encuéntrame al usuario por el id
  return User.findById(id)
    .then((user) => {
      if (!user) throw new Errors.AuthError("User id doesn't belong to anyone");
      // Es para obtener sólo los datos indicados??
      return User.findOne(
        { username: username },
        "username avatar bio dateOfBirth email"
      ).lean();
    })
    .then((user) => {
      // Pasamos el id a string para poder eliminarlo porque no queremos que se vea
      user.id = user._id.toString();
      delete user._id;
      return user;
    });
};
