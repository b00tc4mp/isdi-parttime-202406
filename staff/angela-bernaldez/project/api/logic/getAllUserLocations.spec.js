import 'dotenv/config'
import getAllUserLocations from './getAllUserLocations.js'
import { describe, it } from 'mocha'
import models from '../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'

const { User } = models

describe('getAllUserLocations', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    // need to modify this test as the logic is returning location from Location
    // instead of just the id


    it('returns all user locations when at least one exists', () => {
        return bcrypt.hash('123456789', 1)
            .then((cryptPassword) => {
                const user = {
                    username: 'nametest',
                    email: 'test@mail.com',
                    password: cryptPassword,
                    favLocations: [
                        new mongoose.Types.ObjectId(),
                        new mongoose.Types.ObjectId()]
                    // need to add currentLocation 
                }
                return User.create(user)
                    .then((user) => {
                        const userId  = user._id.toString()
                        return getAllUserLocations(userId)
                            .then((favLocations) => {
                                expect(favLocations).to.have.lengthOf(2)
                            })
                    })
            })
    })
})