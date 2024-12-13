import { Errors } from 'common'
import bcrypt from 'bcrypt'
import models from '../data/models.js'

const { User } = models

export default (id, password) => {

    // TODO: add validators 

    return User.findById(id)
        .then(user => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone")
            return bcrypt.compare(password, user.password)
                .then(isPasswordValid => {
                    if (!isPasswordValid) throw new Errors.CredentialsError("Wrong credentials")
                    return User.findByIdAndDelete(id)
                        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
                })
        })
}