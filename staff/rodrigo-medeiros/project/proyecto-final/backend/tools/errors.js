class AppError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class EmailNotValidError extends AppError {}
export class PasswordNotValidError extends AppError {}
export class BadRequestError extends AppError {}
export class ServerError extends AppError {}
export class UnexpectedError extends AppError {}
export class CredentialsError extends AppError {}
export class UsernameNotValidError extends AppError {}
