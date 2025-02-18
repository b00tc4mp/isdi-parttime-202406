import 'dotenv/config'
import authenticateUser from '../authenticateUser.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'

const { User } = models

describe('authenticateUser', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('returns id if user exists and password is correct', () => {
        return bcrypt.hash('123456789', 1)
            .then((cryptPassword) => {
                const user = {
                    username: 'angelines',
                    email: 'angela-test@mail.com',
                    password: cryptPassword
                }
                return User.create(user)
                    .then((user) => {
                        return authenticateUser('angela-test@mail.com', '123456789')
                            .then((id) => {
                                expect(id).to.equal(user._id.toString())
                            })
                    })
            })
    })

    it('throws error "Wrong password" if password wrong', () => {
        return bcrypt.hash('123456789', 1)
            .then((cryptPassword) => {
                const user = {
                    username: 'angelines',
                    email: 'angela-test@mail.com',
                    password: cryptPassword
                }
                return User.create(user)
                    .then((user) => {
                        return authenticateUser('angela-test@mail.com', '123')
                            .then(() => {})
                            .catch((error => {
                                expect(error.message).to.equal('Wrong Password')
                            }))
                    })
            })
    })
})