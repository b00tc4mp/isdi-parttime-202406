import logic from "../logic/index.js";

export default (req, res, next) => {
  const { authorization } = req.headers;
  const id = Number(authorization.split(" ")[1]);

  try {
    logic.updateUsername(id, newUsername);

    res.status(201).send();
  } catch (error) {
    next(error);
  }
};
