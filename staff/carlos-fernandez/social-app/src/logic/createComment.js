import { Errors, Validator } from "social-common";

export default (postId, comment) => {
  Validator.id(postId);
  //Validator comment

  const token = sessionStorage.getItem("token");

  return fetch(`${process.env.REACT_APP_API_URL}comments/post/${postId}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ comment: comment }),
  })
    .then((res) => {
      if (res.status === 201) return;
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
