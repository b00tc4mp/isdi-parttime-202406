import { Validator, Errors } from "common";
import models from "../data/models.js";

const { User } = models;

export default (id) => {
  Validator.id(id);

  return User.findById(id)
    .populate("dogs")
    .lean()
    .then((user) => {
      if (!user) throw new Errors.NotFoundError("User not found");
      if (!user.dogs) throw new Errors.NotFoundError("Dogs not found");

      const dogsWithId = user.dogs.map((dog) => {
        dog.id = dog._id.toString(); // Asigna _id a .id
        delete dog.__v; // Elimina __v
        delete dog._id;
        console.log("CONSULTA DE PERRO:", dog);
        return dog;
      });

      return dogsWithId;
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
