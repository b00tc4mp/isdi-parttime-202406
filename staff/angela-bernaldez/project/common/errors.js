/*FORMAT ERRORS*/
export class EmailNotValidError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, EmailNotValidError)
        }
    }
}
  
export class PasswordNotValidError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, PasswordNotValidError)
        }
    }
}

export class UsernameNotValidError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UsernameNotValidError)
        }
    }
}
  
/*SERVER ERRORS (on client side)*/
export class BadRequestError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BadRequestError)
        }
    }
}
  
export class ServerError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ServerError)
        }
    }
}
  
/*SERVER ERRORS (on server side)*/
export class CredentialsError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CredentialsError)
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
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ExistenceError)
        }
    }
}
  
export class AuthError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AuthError)
        }
    }
}

export class LocationNotFoundError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, LocationNotFoundError)
        }
    }
}

export class NominatimAPIConnectionError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NominatimAPIConnectionError)
        }
    }
}

export class OpenMeteoAPIConnectionError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, OpenMeteoAPIConnectionError)
        }
    }
}

export class GeoLocationAPIError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GeoLocationAPIError)
        }
    }
}

/*OTHER ERRORS*/
export class UnexpectedError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UnexpectedError)
        }
    }
}

export class ContentError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ContentError)
        }
    }
}

export class WeatherCodeError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, WeatherCodeError)
        }
    }
}

export class ConfirmationError extends Error {
    constructor(message) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ConfirmationError)
        }
    }
}

