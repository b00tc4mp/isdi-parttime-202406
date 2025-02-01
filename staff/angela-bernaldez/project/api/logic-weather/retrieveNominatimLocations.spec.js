import 'dotenv/config'
import retrieveNominatimLocations from './retrieveNominatimLocations.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import models from '../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { User } = models

describe('retrieveNominatimLocations', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('retrieve locations when a string is passed', () => {
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
                        return retrieveNominatimLocations(userId, 'Brighton')
                            .then((locationsRetrieved) => {
                                console.log(locationsRetrieved)
                                // as limit has been set to 5, first 5 locations found should be retrieved
                                expect(locationsRetrieved).to.have.lengthOf(5)
                            })
                    })
            })            
    })
})





