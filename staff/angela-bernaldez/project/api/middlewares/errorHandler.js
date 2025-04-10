import { Errors } from 'common'

export default (error, req, res, next) => {
    let code = 500

    if (error instanceof Errors.EmailNotValidError || error instanceof Errors.UsernameNotValidError || error instanceof Errors.PasswordNotValidError || error instanceof Errors.ContentError) {
        code = 400
    }
    if (error instanceof Errors.CredentialsError || error instanceof Errors.AuthError) {
        code = 401
    }
    if (error instanceof Errors.DuplicityError) {
        code = 409
    }
    if (error instanceof Errors.ExistenceError || error instanceof Errors.LocationNotFoundError) {
        code = 404
    }

    // Errors from external services 
    if (error instanceof Errors.NominatimAPIConnectionError || error instanceof Errors.OpenMeteoAPIConnectionError || error instanceof Errors.GeoLocationAPIError ) {
        code = 503 
    }

    console.error(error)

    res.status(code).json({ name: error.constructor.name, message: error.message })
}