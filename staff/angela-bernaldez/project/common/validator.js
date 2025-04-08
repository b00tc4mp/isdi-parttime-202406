import * as Errors from "./errors.js"

class Validator {
    static email(value) {
        if (typeof value !== 'string') throw new TypeError('Email is not a string')
        if (value.trim().length === 0) throw new Errors.ContentError('Email is empty')

        const regExp = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )

        if (!regExp.test(value)) throw new Errors.EmailNotValidError('Email format is not valid')

        return true
    }

    static password(value) {
        if (typeof value !== 'string') throw new TypeError('Password is not a string')
        if (value.trim().length === 0) throw new Errors.ContentError('Password is empty')
    
        const regExp = /^(?=.*\d)[a-z\d]{8,}$/
    
        if (!regExp.test(value)) throw new Errors.PasswordNotValidError('Password must be at least 8 characters long and contain only lowercase letters and numbers. It must also include at least one number')
    
        return true
    }

    static username(value) {
        if (typeof value !== 'string') throw new TypeError('Username is not a string')
        if (value.trim().length === 0) throw new Errors.ContentError('Username is empty')
        const regExp = new RegExp(/^[a-zA-Z0-9]{1,12}$/)
        if (!regExp.test(value)) throw new Errors.UsernameNotValidError('Username can only have letters (A-Z, a-z) and numbers (0-9), max 12 characters.')
    
        return true
    }

    static confirmationPassword(value1, value2) {
        if (value1 !== value2) throw new Errors.ConfirmationError('Passwords do not match')
    
        return true
    }
    
    static id(value) {
        if (typeof value !== 'string') throw new TypeError('Id is not a string')
        if (value.trim().length === 0) throw new Errors.ContentError('Id is empty')
    
        return true
    }

    static locationData(value) {
        if (typeof value !== 'object' || value === null) {
            throw new TypeError('Location data must be an object')
        }
    
        const { name, latitude, longitude } = value
    
        if (typeof name !== 'string' || name.trim().length === 0) {
            throw new Errors.ContentError('Location name is required and must be a non-empty string')
        }
    
        if (typeof latitude !== 'number' || isNaN(latitude)) {
            throw new Errors.ContentError('Latitude must be a valid number')
        }
    
        if (typeof longitude !== 'number' || isNaN(longitude)) {
            throw new Errors.ContentError('Longitude must be a valid number')
        }
    
        return true
    }

    static isCurrentLocation(value) {
        if (typeof value !== 'boolean') {
            throw new Errors.ContentError('isCurrentLocation must be a boolean (true or false)')
        }
    
        return true
    }

    static locationString(value) {
        if (typeof value !== 'string') {
            throw new Errors.ContentError('locationString must be a string')
        }

        if (value.trim().length === 0) {
            throw new Errors.ContentError('locationString must have a length greater than 0');
        }

        return true
    }

    static weatherData(value) {
        if (typeof value !== 'object' || value === null) {
            throw new Errors.ContentError('Weather data must be an object')
        }

        if (!value.hasOwnProperty('current') || typeof value.current !== 'object') {
            throw new Errors.ContentError('Weather data must contain a valid "current" object')
        }

        if (!value.hasOwnProperty('current_units') || typeof value.current_units !== 'object') {
            throw new Errors.ContentError('Weather data must contain a valid "current_units" object')
        }

        if (!value.hasOwnProperty('daily') || typeof value.daily !== 'object') {
            throw new Errors.ContentError('Weather data must contain a valid "daily" object')
        }

        // Validate each daily key contains an array with values for each day
        const dailyKeys = Object.keys(value.daily)
        dailyKeys.forEach(key => {
            if (!Array.isArray(value.daily[key])) {
                throw new Errors.ContentError(`The property "${key}" in "daily" must be an array`)
            }
        })

        if (!value.hasOwnProperty('daily_units') || typeof value.daily_units !== 'object') {
            throw new Errors.ContentError('Weather data must contain a valid "daily_units" object')
        }

        return true
    }

    static weatherCode(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Errors.ContentError('Weather code must be a valid number')
        }

        return true 
    }

    static isDay(value) {
        if (value !== 1 && value !== 0) {
            throw new Errors.ContentError('isDay must be either 1 (true) or 0 (false)')
        }
    
        return true
    }
}

export default Validator