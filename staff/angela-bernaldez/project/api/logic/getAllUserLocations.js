import models from '../data/models.js'

const { User } = models

export default (id) => {

    // add validator id

    return User.findById(id)
        .then((user) => {
            return user.favLocations
        })
}