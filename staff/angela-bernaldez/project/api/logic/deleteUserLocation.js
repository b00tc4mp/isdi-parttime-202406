// need to add that if there is only the user with that loc, also remove it from location database

import models from '../data/models.js'

const { User, Location } = models

export default (userId, locationData) => {
    // add validators 

    const { name, latitude, longitude } = locationData

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            // user found, now look for locations and see
            return Location.findOne({name: name, latitude: latitude, longitude: longitude})
                .then((location) => {
                    if (!location) throw new Error ('Location attemped to be deleted does not exist in the database')
                    
                    user.favLocations = user.favLocations.filter(favLoc => favLoc._id.toString() !== location._id.toString())

                    return user.save()
                })
        })
}