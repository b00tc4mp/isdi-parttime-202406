import models from '../data/models.js'

const { User, Location } = models

export default (id) => {

    // add validator id

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            if (user.favLocations.length === 0) return []

            return Location.find({ '_id': {$in: user.favLocations }})
                .then((locationsFound) => {
                    return locationsFound
                    // need to check this works as expected
                })
        })
        .catch((error) => {
            // change this to a specific type of error
            console.log(error)
        })
}