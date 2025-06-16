import * as Errors from "../errors/errors.js";
export default (error, req, res, next) => {
  let code = 500;
  if (
    error instanceof Errors.EmailNotValidError ||
    error instanceof Errors.PasswordNotValidError ||
    error instanceof Errors.BadRequestError ||
    error instanceof Errors.DuplicityError ||
    error instanceof Errors.SaveError ||
    error instanceof Errors.DeleteError ||
    error instanceof Errors.CastError
  ) {
    code = 400;
    error instanceof Errors.BadRequestError
  }
  if (
    error instanceof Errors.CredentialsError ||
    error instanceof Errors.AuthError
  ) {
    code = 401;
    // No autorizado
  }
  if (error instanceof Errors.UpdateError) {
    code = 409;
    // Conflicto de datos
  }
  if (error instanceof Errors.ExistenceError ||
      error instanceof Errors.NotFoundError ||
      error instanceof Errors.NotFoundError
  ) {
    code = 404;
    // No encontrado
  }

  console.error(error);

  res
    .status(code)
    .json({ name: error.constructor.name, message: error.message });
};
