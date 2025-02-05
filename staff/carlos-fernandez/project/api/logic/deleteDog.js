import models from "../data/models.js";
import { Errors, Validator } from "common";
import getUserDogs from "./getUserDogs.js";

const { User, Dog } = models;

export default (petId, userId) => {
  Validator.id(petId);
  Validator.id(userId);

  return User.findByIdAndUpdate(userId, { $pull: { dogs: petId } })
    .then(() => {
      console.log("USER ID: ", userId);
      console.log("PET ID: ", petId);
      if (!userId) {
        throw new Errors.ExistenceError("User not found");
      }
      console.log(userId, "ESTE ES EL USERID");
      return Dog.findOneAndDelete(petId, { owner: userId }).then(
        (deletedPet) => {
          if (!deletedPet) {
            throw new Errors.ExistenceError("Dog not found");
          }

          console.log(deletedPet);
          return deletedPet;
        }
      );
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
