import { Errors, Validator } from "common";

export default (bookingId, dogIds) => {
  Validator.id(bookingId);
  dogIds.forEach((dogId) => Validator.id(dogId));
  if (!dogIds.length) {
    return Promise.reject(
      new Errors.BadRequestError("No dogs selected for removal")
    );
  }

  const token = sessionStorage.getItem("token");

  return fetch(`${import.meta.env.VITE_APP_API_URL}users/update-booking`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ bookingId, dogIds }),
  })
    .then((res) => {
      if (res.status === 200) return;
      if (res.status === 404) {
        throw new Errors.NotFoundError("Booking not found");
      }
      return res.json().then((body) => {
        const constructor = Errors[body.name];
        throw new constructor(`${body.message}`);
      });
    })
    .catch((error) => {
      if (error instanceof Errors.BadRequestError)
        throw new Errors.ServerError("Could not process request");
      throw error;
    });
};
