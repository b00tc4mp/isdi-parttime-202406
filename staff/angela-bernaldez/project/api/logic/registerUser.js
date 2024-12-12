import { Errors } from 'common'
import bcrypt from 'bcrypt'
import models from '../data/models.js'

const { User } = models

export default (username, email, password) => {

    // TODO: add validators 

    return User.findOne({ email: email })
        .then((user) => {
            if (user) throw new Errors.DuplicityError('Email already in use')
                return bcrypt.hash(password, 15)
                    .then((cryptPassword) => {
                        const user = {
                            username,
                            email,
                            password: cryptPassword
                        }
                        
                        return User.create(user)
                    })
                    .catch((error) => { throw new Errors.UnexpectedError(error.message) })
        })
}

