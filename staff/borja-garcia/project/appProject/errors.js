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
  

  export class ApiError extends Error {
    constructor(message) {
      super(message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ApiError);
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
  
  export class DuplicityError extends Error {
    constructor(message) {
      super(message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, DuplicityError);
      }
    }
  }
  
  export class ExistenceError extends Error {
    constructor(message) {
      super(message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ExistenceError);
      }
    }
  }
  
  export class NotFoundError extends Error {
    constructor(message) {
      super(message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, NotFoundError);
      }
    }
  }

  export class AuthError extends Error {
    constructor(message) {
      super(message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, AuthError);
      }
    }
  }
  
  
  /*OTHER ERRORS*/
  export class UnexpectedError extends Error {
    constructor(message) {
      super(message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, UnexpectedError);
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
  
  export class ConfirmationError extends Error {
    constructor(message) {
      super(message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ConfirmationError);
      }
    }
  }
  
  
export class TypeError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TypeError);
    }
  }
}
