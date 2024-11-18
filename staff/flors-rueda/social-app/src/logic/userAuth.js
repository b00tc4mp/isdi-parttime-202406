import { Validator, Errors } from "social-common";

const userAuth = (email, password) => {
  Validator.password(password)
  Validator.email(email)

  return fetch(`${process.env.REACT_APP_API_URL}users/auth`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      if (res.status === 200) return res.json()
        .then(token => sessionStorage.setItem("token", token));
      return res.json();
    })
    .then(body => {
      const constructor = Errors[body.name]
      throw new constructor(`${body.message}`);
    })
    .catch((err) => {
      if (err instanceof TypeError)
        throw new Errors.ServerError("Server in not connected");
      throw new Errors.UnexpectedError();
    });
};


export default userAuth;
