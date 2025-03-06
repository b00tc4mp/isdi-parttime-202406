import { Validator, Errors } from "common";
import { BadRequestError } from "common/errors";

export default (bookingId) => {
  Validator.id(bookingId);

  const token = sessionStorage.getItem("token");

  console.log(import.meta.env.VITE_APP_API_URL);
  return fetch(`${import.meta.env.VITE_APP_API_URL}users/delete-booking`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ bookingId }),
  })
    .then((res) => {
      if (res.status === 204) return;
      return res.json().then((body) => {
        const constructor = Errors[body.name] || Error;
        throw new constructor(body.message);
      });
    })
    .catch((error) => {
      console.log(error);
      if (error instanceof TypeError) {
        throw new Errors.ServerError("Network error, please try again.");
      }

      if (error instanceof BadRequestError) {
        throw new Errors.ServerError("Server is not connected");
      }
      throw error;
    });
};
