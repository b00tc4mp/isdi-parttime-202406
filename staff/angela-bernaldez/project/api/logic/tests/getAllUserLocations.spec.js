import 'dotenv/config'
import getAllUserLocations from '../getAllUserLocations.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'
import { Errors } from 'common'

const { Location, User } = models

describe('getAllUserLocations', () => {
    before(() => mongoose.connect(process.env.MONGO_URI_TEST))

    let user, location1, location2

    beforeEach(async () => {

        await User.deleteMany()
        await Location.deleteMany()

        location1 = await Location.create({ 
            name: 'Brighton', 
            latitude: 51, 
            longitude: -0.5,
            timeLastUpdated: new Date()
        })

        location2 = await Location.create({
            name: 'London', 
            latitude: 51.5074, 
            longitude: -0.1278,
            timeLastUpdated: new Date()
        })

        const cryptPassword = await bcrypt.hash('123456789', 1)

        user = await User.create({
            username: 'nametest',
            email: 'name_test@mail.com',
            password: cryptPassword,
            favLocations: [location1._id.toString(), location2._id.toString()]
        })
    })

    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('should return the favorite locations of a user', async () => {
        const locations = await getAllUserLocations(user._id.toString())
        expect(locations).to.have.lengthOf(2)
        expect(locations[0].name).to.equal('Brighton')
        expect(locations[1].name).to.equal('London')
    })

    it('should return an empty array if the user has no favorite locations', async () => {
        const newUser = await User.create({
            username: 'newuser',
            email: 'new@mail.com',
            password: '123456789',
            favLocations: []
        })

        const locations = await getAllUserLocations(newUser._id.toString())
        expect(locations).to.be.an('array').that.is.empty
    })

    it('should throw an error if the user does not exist', async () => {
        try {
            await getAllUserLocations('000000000000000000000000')  
        } catch (error) {
            expect(error).to.be.instanceOf(Errors.AuthError)
            expect(error.message).to.equal('User id does not belong to anyone')
        }
    })

    it('should return locations in the same order as they are stored in the user document', async () => {
        const locations = await getAllUserLocations(user._id.toString())
        expect(locations[0].name).to.equal('Brighton')
        expect(locations[1].name).to.equal('London')
    })
})
