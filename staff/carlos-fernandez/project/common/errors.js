/* FORMAT ERRORS */

export class UsernameNotValidError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UsernameNotValidError);
    }
  }
}

export class SurnameNotValidError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SurnameNotValidError);
    }
  }
}

export class PhoneNumberNotValidError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PhoneNumberNotValidError);
    }
  }
}

export class NifNotValidError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NifNotValidError);
    }
  }
}

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

export class ConfirmationError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ConfirmationError);
    }
  }
}

/* SERVER ERRORS (on client side) */

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

export class ContentError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ContentError);
    }
  }
}

export class DuplicityError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DuplicityError);
    }
  }
}

/* OTHER ERRORS  */
export class UnexpectedError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServerError);
    }
  }
}
