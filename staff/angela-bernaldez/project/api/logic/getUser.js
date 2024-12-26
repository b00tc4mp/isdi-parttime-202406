import models from '../data/models.js'

const { User } = models

export default (id) => {
    // validate id

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            user.id = user._id.toString()
            delete user._id
            return user
        })
}