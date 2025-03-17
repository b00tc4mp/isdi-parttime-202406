import models from '../data/models.js'
import { Validator, Errors } from 'common'

const { User } = models

export default (userId, locationString) => {
    
    Validator.id(userId)
    Validator.locationString(locationString)
    
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${locationString}&limit=5&format=json`

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return fetch(nominatimUrl)
                .then((response) => {
                    if (!response.ok) throw new Errors.NominatimAPIConnectionError('Unable to stablish connection with Nominatim API')
                    return response.json()
                        .then((locationsFound) => {
                            if (!locationsFound || locationsFound.length === 0) {
                                throw new Errors.LocationNotFoundError(error.message)
                            }
                            return locationsFound
                        })
                })
        })
        .catch((error) => { 
            throw new Errors.UnexpectedError(error.message) 
        })
}

