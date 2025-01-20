import models from '../data/models.js'

const { User } = models

export default (id) => {

    // add validator id

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return user.favLocations
        })
        .catch((error) => {
            // change this to a specific type of error
            console.log(error)
        })
}