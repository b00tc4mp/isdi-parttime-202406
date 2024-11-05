import { BadRequestError, ServerError, UnexpectedError } from "../tools/errors";

const getUserData = (token, id) => {
  // todavía no usamos token
  return fetch(`${process.env.REACT_APP_API_URL}users/${id}`, {
    method: "GET",
  })
    .then((res) => {
      if (res.status >= 400 && res.status < 500)
        throw new BadRequestError("Token or id is invalid");
      if (res.status >= 500 && res.status < 600)
        throw new ServerError("Server not work as expected");
      if (!(res.status === 200)) throw new UnexpectedError();
      if (!(res.ok === true)) throw new UnexpectedError();

      return res.json();
    })
    .then((data) => {
      const { password, repeatPassword, ...restData } = data;
      return restData;
    })
    .catch((err) => {
      if (err instanceof TypeError)
        throw new ServerError("Server in not connected");
      throw new UnexpectedError();
    });
};

export default getUserData;
