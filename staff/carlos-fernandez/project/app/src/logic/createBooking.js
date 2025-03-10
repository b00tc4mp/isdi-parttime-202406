import { Validator, Errors } from "common";

export default ({ dogs, startDate, endDate }) => {
  if (!Array.isArray(dogs)) {
    throw new Errors.BookingNotValidError("DogId must be an array");
  }
  dogs.forEach((dogId) => Validator.id(dogId));
  Validator.startDate(startDate, "Start Date");
  Validator.endDate(endDate, "End Date");

  const token = sessionStorage.getItem("token");

  return fetch(`${import.meta.env.VITE_APP_API_URL}users/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ dogs, startDate, endDate }),
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
