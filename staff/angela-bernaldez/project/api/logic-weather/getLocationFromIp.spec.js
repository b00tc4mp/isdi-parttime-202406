import 'dotenv/config'
import getLocationFromIp from './getLocationFromIp.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import models from '../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { User } = models

describe('getLocationFromIp', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('retrieve location data when user makes a request', () => {
        return bcrypt.hash('123456789', 1)
            .then((cryptPassword) => {
                const user = {
                    username: 'nametest',
                    email: 'test@mail.com',
                    password: cryptPassword
                }
                return User.create(user)
                    .then((user) => {
                        const userId = user._id.toString()
                        return getLocationFromIp(userId)
                            .then((locationDataFromIp) => {
                                expect(locationDataFromIp).to.have.property('name'),
                                expect(locationDataFromIp).to.have.property('latitude'),
                                expect(locationDataFromIp).to.have.property('longitude')
                            })
                    })
            })
    })
})