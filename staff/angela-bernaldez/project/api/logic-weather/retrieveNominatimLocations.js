import models from '../data/models.js'
import { Errors } from 'common'

const { User } = models

export default (userId, locationString) => {
    // validate locationString?
    // user types something in the front and goes to the back. make sure to catch a string

    // userId is passed to make sure only registered users can use the api
    
    const nominatim_url = `https://nominatim.openstreetmap.org/search?q=${locationString}&limit=5&format=json`

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return fetch(nominatim_url)
                .then((response) => {
                    if (!response.ok) throw new Error('Unable to stablish connection with Nominatim API')
                    return response.json()
                        .then((locationsFound) => {
                            if (!locationsFound || locationsFound.length === 0) {
                                throw new Error('No locations found')
                            }
                            return locationsFound
                        })
                        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
                })
    })
}

