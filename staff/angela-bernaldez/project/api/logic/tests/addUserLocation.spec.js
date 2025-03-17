import 'dotenv/config'
import addUserLocation from '../addUserLocation.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'

const { User, Location } = models

describe('addUserLocation', () => {

    // BEFORE EACH CREAR USUARIO Y LOCATION SI LO NECESITO
    // Y ASI NO TENGO QUE CREARLO EN CADA TEST INDIVIDUAL 
    // ANTES DE CADA TEST SE CREA
    // Y CON EL AFTEREACH SE BORRA

    // CREATE ANOTHER FOLDER INSIDE LOGIC FOR TESTS

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))

    let user, location

    beforeEach(async () => {

        const _user = await User.create({
            username: 'nametest',
            email: 'test@mail.com',
            password: '123456789',
        }) 
        user = _user
        location = { 
            name: 'Brighton', 
            latitude: 51, 
            longitude: -0.5, 
            timeLastUpdated: new Date()}
    })

    afterEach(() => User.deleteMany())
    afterEach(() => Location.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('add location when location does not exist and user does not have any fav locations', () => {
        const isCurrentLocation = false
        return addUserLocation(user._id.toString(), location, isCurrentLocation)
            .then((userModified) => {
                return Location.findOne({ name: 'Brighton', latitude: 51, longitude: -0.5})
                    .then((newLocation) => {
                        expect(userModified.favLocations[userModified.favLocations.length - 1]).to.deep.equal(newLocation._id)
                        expect(newLocation.name).to.equal('Brighton')
                        expect(newLocation.latitude).to.equal(51)
                        expect(newLocation.longitude).to.equal(-0.5)
                    })
            })
    })

    it('add location when location already exists but not for that user', () => {
        const isCurrentLocation = false
        return Location.create(location)
            .then((newLocation) => {
                return addUserLocation(user._id.toString(), location, isCurrentLocation)
                    .then((userModified) => {
                        expect(userModified.favLocations[userModified.favLocations.length - 1]).to.deep.equal(newLocation._id)
                        expect(newLocation.name).to.equal('Brighton')
                        expect(newLocation.latitude).to.equal(51)
                        expect(newLocation.longitude).to.equal(-0.5)
                    }) 
            })
    })

    // it for add location when other locations already exist
    // it for add location when location already exists for that user

})