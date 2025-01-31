import models from '../data/models.js'

const { User } = models

export default (id) => {

    // add validator id

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            // currently this only returns location ids
            // this function could potentially be modified to return all location info
            // coords, altitude, lastTimeUpdates and variables
            // then, only retrieve weather data again if last update was more than 1 hour ago
            return user.favLocations
        })
        .catch((error) => {
            // change this to a specific type of error
            console.log(error)
        })
}