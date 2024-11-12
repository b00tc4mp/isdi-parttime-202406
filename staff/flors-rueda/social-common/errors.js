/*FORMAT ERRORS*/

export class EmailNotValidError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EmailNotValidError);
    }
  }
}

export class PasswordNotValidError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PasswordNotValidError);
    }
  }
}

export class UsernameNotValidError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UsernameNotValidError);
    }
  }
}

export class DateOfBirthNotValidError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DateOfBirthNotValidError);
    }
  }
}


/*SERVER ERRORS (on client side)*/

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
    }
  }
}

export class ServerError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServerError);
    }
  }
}

/*SERVER ERRORS (on server side)*/

export class CredentialsError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CredentialsError);
    }
  }
}

/*TODO añadir Duplicity, Existence, Auth*/


/*OTHER ERRORS*/
export class UnexpectedError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnexpectedError);
    }
  }
}

/*TODO añadir Content, Confirmation*/



