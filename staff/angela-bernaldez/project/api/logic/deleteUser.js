import { Validator, Errors } from 'common'
import bcrypt from 'bcrypt'
import models from '../data/models.js'

const { User } = models

export default (userId, password) => {

    Validator.id(userId)
    Validator.password(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return bcrypt.compare(password, user.password)
                .then(isPasswordValid => {
                    if (!isPasswordValid) throw new Errors.CredentialsError('Wrong credentials')
                    return User.findByIdAndDelete(userId)
                        .then((deletedUser) => {
                            if (!deletedUser) {
                                throw new Errors.ExistenceError('User not found so could not be deleted')
                            }
                        })
                })
        })
        .catch((error) => { 
            throw new Errors.UnexpectedError(error.message) 
        })
}