import models from '../data/models.js'

const { User } = models

export default (id) => {
    // validate id

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            // need to convert user to plain object as it is a mongo object
            // otherwise password and _id keys couldn´t be deleted 
            user = user.toObject()
            user.id = user._id.toString()
            delete user.password
            delete user._id
            return user
        })
        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
}