import 'dotenv/config'
import deleteUserLocation from '../deleteUserLocation.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'


const { Location, User } = models

describe('deleteUserLocation', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))

    let location, user

    beforeEach(async () => {
        await Location.deleteMany()
        await User.deleteMany()

        const _location = await Location.create({ 
            name: 'Brighton', 
            latitude: 51, 
            longitude: -0.5, 
            timeLastUpdated: new Date()
        })
        location = _location
        const _user = await User.create({
            username: 'nametest',
            email: 'test@mail.com',
            password: '123456789',
            favLocations: [location._id.toString()]
        }) 
        user = _user
    })

    afterEach(() => User.deleteMany())  // SON ASINCRONAS, DEBO PONER ASYNC???
    afterEach(() => Location.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('delete a fav location for an user', () => {
        return deleteUserLocation(user._id.toString(), location)
            .then(() => {
                return User.findOne({ email: 'test@mail.com' })
                    .then((user) => {
                        console.log(user)
                        console.log(location._id, 'location id')
                        const locationStillExists = user.favLocations.some(favLoc => favLoc.equals(location._id.toString()))
        
                        expect(locationStillExists).to.be.false
                    })
            })
    })


})