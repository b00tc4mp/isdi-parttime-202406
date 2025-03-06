import models from '../data/models.js'
import { Errors } from 'common'

const { User } = models

export default (userId) => {
    const ipApiUrl = 'http://ip-api.com/json'

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return fetch(ipApiUrl)
                .then((response) => {
                    if (!response.ok) throw new Error('Unable to stablish connection with IP API to obtain current location')
                    return response.json()
                        .then((data) => {
                            if (data.status === 'success') {
                                const currentLocation = {
                                    name: data.city, 
                                    latitude: data.lat,
                                    longitude: data.lon
                                }
                                return currentLocation
                            }
                        })
                        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
                })
        })
}