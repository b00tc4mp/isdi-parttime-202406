import { Validator, Errors } from "common";

const registerPet = (
  id,
  { chip, dogName, breed, birthDate, sociability, disease, allergy }
) => {
  Validator.id(id);
  Validator.chip(chip);
  Validator.dogName(dogName);
  Validator.breed(breed);
  Validator.birthDate(birthDate);
  Validator.sociability(sociability);
  Validator.disease(disease);
  Validator.allergy(allergy);

  const dogData = {
    chip,
    dogName,
    breed,
    birthDate,
    sociability,
    disease,
    allergy,
  };

  return fetch(`${import.meta.env.VITE_APP_API_URL}users/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id: userId, ...dogData }),
  })
    .then((res) => {
      if (res.status === 201) return;
      return res.json().then((body) => {
        const constructor = Errors[body.name];
        throw new constructor(`${body.message}`);
      });
    })
    .catch((error) => {
      if (error instanceof TypeError)
        throw new Errors.ServerError("Server is not connected");
      throw error;
    });
};

export default registerPet;
