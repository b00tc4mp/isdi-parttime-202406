import logic from "../logic/index.js";

export default (req, res) => {
  const { authorization } = req.headers;
  const { idRequested } = req.params;
  console.log(req.params);
  const idLogged = Number(authorization.split(" ")[1]);

  try {
    const requestedUser = logic.getOneUser(idLogged, Number(idRequested));

    res.status(202).send(requestedUser);
  } catch (error) {
    if (error.message === "User doesn't exist") {
      res.status(401).send(error.message);
    } else if (error.message === "User not found") {
      res.status(404).send(error.message);
    } else {
      res.status(418).send(error.message);
    }
  }
};
