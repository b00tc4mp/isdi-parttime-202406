import 'dotenv/config'
import deleteUserLocation from '../deleteUserLocation.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'
import { Errors } from 'common'

const { Location, User } = models

describe('deleteUserLocation', () => {
    before(() => mongoose.connect(process.env.MONGO_URI_TEST))

    let location, user

    beforeEach(async () => {
        await User.deleteMany()  
        await Location.deleteMany()

        const _location = await Location.create({ 
            name: 'Brighton', 
            latitude: 51, 
            longitude: -0.5, 
            timeLastUpdated: new Date()
        })
        location = _location

        const cryptPassword = await bcrypt.hash('123456789', 1)

        const _user = await User.create({
            username: 'nametest',
            email: 'test@mail.com',
            password: cryptPassword,
            favLocations: [location._id.toString()]
        }) 
        user = _user
    })

    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('should delete a favorite location from a user', async () => {
        await deleteUserLocation(user._id.toString(), location)

        const updatedUser = await User.findOne({ email: 'test@mail.com' })
        const locationStillExists = updatedUser.favLocations.some(favLoc => favLoc.equals(location._id.toString()))

        expect(locationStillExists).to.be.false
    })

    it('should throw an error if the user does not exist', async () => {
        try {
            await deleteUserLocation('000000000000000000000000', location)
        } catch (error) {
            expect(error).to.be.instanceOf(Errors.AuthError)
            expect(error.message).to.equal('User id does not belong to anyone')
        }
    })

    it('should throw an error if the location does not exist in the database', async () => {
        const fakeLocation = { _id: '000000000000000000000000', name: 'Fake Location', latitude: 50, longitude: 30 }
        try {
            await deleteUserLocation(user._id.toString(), fakeLocation)
        } catch (error) {
            expect(error).to.be.instanceOf(Errors.ExistenceError)
            expect(error.message).to.equal('Location attemped to be deleted does not exist in the database')
        }
    })

    it('should not remove a location if it is not a favorite of the user', async () => {
        const newLocation = await Location.create({
            name: 'London',
            latitude: 51.5074,
            longitude: -0.1278,
            timeLastUpdated: new Date(),
        })

        await deleteUserLocation(user._id.toString(), newLocation)

        const updatedUser = await User.findOne({ email: 'test@mail.com' })
        const locationStillExists = updatedUser.favLocations.some(favLoc => favLoc.equals(location._id.toString()))

        expect(locationStillExists).to.be.true  
    })
})
