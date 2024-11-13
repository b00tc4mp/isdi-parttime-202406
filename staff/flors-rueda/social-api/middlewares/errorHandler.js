import { Errors } from "social-common";

export default (error, req, res, next) => {
    let errorStatus = 500;

    if (error instanceof Errors.EmailNotValidError || error instanceof Errors.UsernameNotValidError || error instanceof Errors.DateOfBirthNotValidError || error instanceof Errors.PasswordNotValidError || error instanceof Errors.ContentError) {
        errorStatus = 400;
    }
    if (error instanceof Errors.CredentialsError || error instanceof Errors.AuthError) {
        errorStatus = 401;
    }
    if (error instanceof Errors.DuplicityError) {
        errorStatus = 409;
    }
    if (error instanceof Errors.ExistenceError) {
        errorStatus = 404;
    }

    res.status(errorStatus).send(`${error.constructor.name}: ${error.message}.`);
}