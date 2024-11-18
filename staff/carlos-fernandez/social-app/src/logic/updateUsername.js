import { Errors, Validator } from "social-common";

export default (username) => {
  Validator.username(username);

  const token = sessionStorage.getItem("token");

  return fetch(`${process.env.REACT_APP_API_URL}users/username`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ username: username }),
  })
    .then((res) => {
      if (res.status !== 200) throw new Errors.ServerError(res.json());
      return;
    })
    .catch((error) => {
      if (error instanceof TypeError)
        throw new Errors.ServerError("Server in not connected");
      throw error;
    });
};
