import models from '../data/models.js'

const { User, Location } = models

export default(userId, locationId) => {

    return User.findById(userId)
    .then((user) => {
        if (!user) throw new Errors.AuthError('User id does not belong to anyone')
        return Location.findById(locationId)
            .then((locationFound) => {
                if (!locationFound) throw new Errors.ExistenceError('Location does not exist')

                return locationFound
            })
    })
}