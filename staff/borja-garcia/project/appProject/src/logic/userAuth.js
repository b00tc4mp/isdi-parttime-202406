import Validator from "../../validator.js";
import * as Errors from "../../errors.js";

const userAuth = (email, password) => {
  Validator.password(password);
  Validator.email(email);

  return fetch(`/api/users/auth`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 200)
      return res.json();
    })
    .catch((err) => {
      if (err instanceof TypeError)
        throw new Errors.ServerError("Server is not connected");

      throw new Errors.UnexpectedError();
    });
};

export default userAuth;
