import logic from "../logic/index.js";

export default (req, res, next) => {
  const { chip, dogName, breed, birthDate, sociability, disease, allergy } =
    req.body.dogData;

  const userId = req.id;
  try {
    const dogData = {
      chip,
      dogName,
      breed,
      birthDate,
      sociability,
      disease,
      allergy,
    };
    logic
      .registerPet(userId, dogData)
      .then(() => res.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
