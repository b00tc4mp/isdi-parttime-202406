import 'dotenv/config'
import retrieveWeatherData from '../retrieveWeatherData.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Location, User } = models

describe('retrieveWeatherData', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())
    afterEach(() => Location.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('retrieve weather data', () => {
        const location = {
            name: 'Brighton', 
            latitude: 50.1245,
            longitude: -0.154, 
            timeLastUpdated: Date.now()
        }
        return Location.create(location)
            .then((location) => {
                return bcrypt.hash('123456789', 1)
                    .then((cryptPassword) => {
                        const user = {
                            username: 'nametest',
                            email: 'test@mail.com',
                            password: cryptPassword,
                            currentLocation: location._id
                        }
                        return User.create(user)
                            .then((user) => {
                                return retrieveWeatherData(user._id, location)
                                    .then((weatherData) => {
                                        console.log(weatherData.current, 'imprimiendo weather data aqui en el test')
                                    })
                            })
                    })
            })     
    })       
})
