import 'dotenv/config'
import addUserLocation from './addUserLocation.js'
import { describe, it } from 'mocha'
import models from '../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'

const { User, Location } = models

describe('addUserLocation', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())
    afterEach(() => Location.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('add location when location does not exist and user does not have any fav locations', () => {
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
                        const locationData = { name: 'Brighton', latitude: 51, longitude: -0.5, altitude: 40 }
                        return addUserLocation(userId, locationData)
                            .then((userModified) => {
                                return Location.findOne({ name: 'Brighton', latitude: 51, longitude: -0.5})
                                .then((newLocation) => {
                                    expect(userModified.favLocations[userModified.favLocations.length - 1]).to.deep.equal(newLocation._id)
                                    expect(newLocation.name).to.equal('Brighton')
                                    expect(newLocation.latitude).to.equal(51)
                                    expect(newLocation.longitude).to.equal(-0.5)
                                    expect(newLocation.altitude).to.equal(40)
                                })
                            })
                    })
            })
    })

    it('add location when location already exists but not for that user', () => {
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
                        const locationData = {
                            name: 'Brighton',
                            latitude: 51,
                            longitude: -0.5, 
                            altitude: 40,
                            timeLastUpdated: new Date()
                        }
                        return Location.create(locationData)
                        .then((newLocation) => {
                            return addUserLocation(userId, locationData)
                                .then((userModified) => {
                                    expect(userModified.favLocations[userModified.favLocations.length - 1]).to.deep.equal(newLocation._id)
                                    expect(newLocation.name).to.equal('Brighton')
                                    expect(newLocation.latitude).to.equal(51)
                                    expect(newLocation.longitude).to.equal(-0.5)
                                    expect(newLocation.altitude).to.equal(40)
                                }) 
                        })
                    })
            })
    })

    // it for add location when other locations already exist
    // it for add location when location already exists for that user

})