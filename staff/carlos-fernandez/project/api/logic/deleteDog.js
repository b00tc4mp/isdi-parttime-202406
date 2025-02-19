import models from "../data/models.js";
import { Errors, Validator } from "common";
import getUserDogs from "./getUserDogs.js";

const { User, Dog } = models;

export default (petId, userId) => {
  Validator.id(petId);
  Validator.id(userId);

  return User.findByIdAndUpdate(userId, { $pull: { dogs: petId } })
    .then(() => {
      if (!userId) {
        throw new Errors.ExistenceError("User not found");
      }

      return Dog.findOneAndDelete({ _id: petId, owner: userId }).then(
        (deletedPet) => {
          if (!deletedPet) {
            throw new Errors.ExistenceError("Dog not found");
          }

          return deletedPet;
        }
      );
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
