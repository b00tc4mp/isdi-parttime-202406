import bcrypt from 'bcrypt'
import models from '../data/models.js'

const { User } = models

export default (userId, oldPassword, newPassword) => {

    // validate userId
    // validate newPassword
    // validate oldPassword

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return bcrypt.compare(oldPassword, user.password)
                .then((isPasswordCorrect) => {
                    if (!isPasswordCorrect) throw new Errors.CredentialsError('Wrong Password')

                    return bcrypt.hash(newPassword, 15)
                        .then((cryptPassword) => {
                            return User.findByIdAndUpdate(userId, { password: cryptPassword })
                        })
                        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
                })
        })
}