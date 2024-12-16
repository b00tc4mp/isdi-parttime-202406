import { Validator, Errors } from "common";

const userAuth = (email, password) => {
  Validator.email(email);
  Validator.password(password);
  console.log(import.meta.env.VITE_APP_API_URL);
  return fetch(`${import.meta.env.VITE_APP_API_URL}users/auth`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 200)
        return res
          .json()
          .then((body) => sessionStorage.setItem("token", body.token));
      return res.json().then((body) => {
        const constructor = Errors[body.name];
        throw new constructor(`${body.message}`);
      });
    })
    .catch((error) => {
      if (error instanceof TypeError)
        throw new Errors.ServerError("Server not connected");
      throw new Errors.UnexpectedError();
    });
};

export default userAuth;
