// deleteUser.js
import { Errors, Validator } from "social-common";
import models from "../data/models.js";
import jwt from "jsonwebtoken";

const { User } = models;
const SECRET_KEY = "your_secret_key"; // Substitua pelo segredo real

export default (token, password) => {
  if (!token) throw new Errors.AuthError("Token is required");

  let userId;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    userId = decoded.id;
  } catch (error) {
    throw new Errors.AuthError("Invalid token");
  }

  Validator.password(password);

  return User.findById(userId).then((user) => {
    if (!user) throw new Errors.AuthError("User not found");
    return User.findByIdAndDelete(userId).catch((error) => {
      throw new Errors.UnexpectedError(error.message);
    });
  });
};
