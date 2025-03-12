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
                    const orderedLocations = user.favLocations.map(id => 
                        locationsFound.find(location => location._id.toString() === id.toString())
                    )
                    // NEED TO CHECK HOW CAN LOCATIONS BE RETURNED IN THE SAME ORDER 
                    // THEY APPEAR IN USER.FAVLOCATIONS 
                    return orderedLocations
                })
        })
        .catch((error) => {
            // change this to a specific type of error
            console.log(error)
        })
}