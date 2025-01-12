import { Errors, Validator } from "common";

export default (password, newPassword, repeatNewPassword) => {
  Validator.password(password);
  Validator.password(newPassword);
  Validator.password(repeatNewPassword);
  Validator.confirmationPassword(newPassword, repeatNewPassword);

  const token = sessionStorage.getItem("token");

  return fetch(`${import.meta.env.VITE_APP_API_URL}users/update-password`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      "old-password": password,
      "new-password": newPassword,
    }),
  })
    .then((res) => {
      if (res.status === 200) return;
      return res.json().then((body) => {
        const constructor = Errors[body.name];
        throw new constructor(`${body.message}`);
      });
    })
    .catch((error) => {
      if (error instanceof Errors.BadRequestError)
        throw new Errors.ServerError("Server in not connected");
      throw error;
    });
};
