import models from '../data/models.js'
import { Validator, Errors } from 'common'

const { User } = models

export default (userId) => {
    
    Validator.id(userId)

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            // need to convert user to plain object as it is a mongo object
            // otherwise password and _id keys couldn´t be deleted 
            user = user.toObject()
            user.id = user._id.toString()
            delete user.password
            delete user._id
            delete user.__v
            return user
        })
        .catch((error) => {
            throw error
        })
}