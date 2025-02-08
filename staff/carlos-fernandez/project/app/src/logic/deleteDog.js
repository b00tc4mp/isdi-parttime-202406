import { Errors, Validator } from "common";
import { BadRequestError } from "common/errors";

export default (petId) => {
  const token = sessionStorage.getItem("token");

  console.log(import.meta.env.VITE_APP_API_URL);
  return fetch(
    `${import.meta.env.VITE_APP_API_URL}users/me/pets/delete-dog/${petId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => {
      if (res.status === 200) return;

      return res.json().then((body) => {
        const constructor = Errors[body.name] || Error;
        throw new constructor(body.message);
      });
    })
    .catch((error) => {
      if (error instanceof BadRequestError) {
        throw new Errors.ServerError("Server not connected");
      }
      throw error;
    });
};
