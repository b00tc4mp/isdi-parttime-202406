import models from "../data/models.js";
import { Errors, Validator } from "common";

const { User, Dog } = models;

export default (petId, userId) => {
  Validator.id(petId);
  Validator.id(userId);

  return User.findByIdAndUpdate(userId, { $pull: { dogs: petId } })
    .then((user) => {
      if (!user) {
        throw new Errors.ExistenceError("User not found");
      }

      return Dog.findOneAndDelete({ _id: petId, owner: userId }).then(
        (deletedPet) => {
          console.log(deletedPet);
          if (!deletedPet) {
            throw new Errors.ExistenceError("Dog not found");
          }
        }
      );
    })
    .catch((error) => {
      throw error;
    });
};
