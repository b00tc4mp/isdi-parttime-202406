import { Validator, Errors } from "common";
import models from "../data/models.js";

const { User, Dog } = models;

export default (id, dogData) => {
  const { chip, dogName, breed, birthDate, sociability, disease, allergy } =
    dogData;

  //Try.catch para asegurarme que pasa los validadores antes que mongoose y devuelva el error deseado
  try {
    Validator.chip(chip);
    Validator.dogName(dogName);
    Validator.breed(breed);
    Validator.birthDate(birthDate);
    Validator.sociability(sociability);
    Validator.disease(disease);
    Validator.allergy(allergy);
  } catch (validationError) {
    return Promise.reject(validationError); // Retornar el error de validación
  }

  return User.findById(id)
    .then((user) => {
      if (!user) throw new Errors.NotFoundError("User not found");

      // Check if a dog with the same chip already exists for this user
      return Dog.findOne({ chip: chip }).then((existingDog) => {
        if (existingDog) {
          throw new Errors.DuplicityError(
            "A dog with the same chip already exists"
          );
        }

        const dog = new Dog({
          chip,
          dogName,
          breed,
          birthDate,
          sociability,
          disease,
          allergy,
          owner: user._id,
        });

        // Create dog and push to user's schema
        return dog.save().then((createdDog) => {
          user.dogs.push(createdDog._id);
          return user.save().then(() => createdDog);
        });
      });
    })
    .catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
};
