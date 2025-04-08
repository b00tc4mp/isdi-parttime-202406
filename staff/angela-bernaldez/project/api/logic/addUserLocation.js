import models from '../data/models.js'
import { Validator, Errors } from 'common'

const { User, Location } = models

const getOrCreateLocation = async (location, locationData) => {
    if (location) return location

    return Location.create({
        name: locationData.name,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        timeLastUpdated: new Date(),
    })
} 

export default (userId, locationData, isCurrentLocation = false) => {
    
    Validator.id(userId)
    Validator.locationData(locationData)
    Validator.isCurrentLocation(isCurrentLocation)

    const { name, latitude, longitude } = locationData

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return Location.findOne({name: name, latitude: latitude, longitude: longitude})
                .then((location) => {
                    return getOrCreateLocation(location, locationData)
                        .then((newLocation) => {
                            // if adding current location, save it or overwrite exisiting one
                            if (isCurrentLocation) {
                                user.currentLocation = newLocation._id
                                return user.save()
                            }

                            const foundLocation = user.favLocations.find((location) => location._id.toString() === newLocation._id.toString())

                            if (!foundLocation) {
                                user.favLocations.push(newLocation._id)
                                return user.save()
                            }

                            return user
                        })
                })
        })
        .catch((error) => {
            throw new Errors.AuthError(error.message)
        })
}