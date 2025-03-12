import models from '../data/models.js'

const { User } = models

export default (userId, newUsername) => {

    // validate userId
    // validate newUsername

    return User.findByIdAndUpdate(userId, { username: newUsername })
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
        })
        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
}