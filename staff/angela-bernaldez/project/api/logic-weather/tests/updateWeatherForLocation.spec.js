import 'dotenv/config'
import updateWeatherForLocation from '../updateWeatherForLocation.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Location, User } = models

describe('updateWeatherForLocation', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())
    afterEach(() => Location.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('update weather data', () => {
        const location = {
            name: 'Brighton', 
            latitude: 50.1245,
            longitude: -0.154, 
            timeLastUpdated: Date.now()
        }
        const weatherData = {
            current: {
                time: '2025-02-21T20:45',
                interval: 900,
                temperature_2m: 11.5,
                relative_humidity_2m: 87,
                is_day: 0,
                precipitation: 0,
                weather_code: 61,
                wind_speed_10m: 31.7
              },
            daily: { 
                time: [
                '2025-02-21',
                '2025-02-22',
                '2025-02-23',
                '2025-02-24',
                '2025-02-25',
                '2025-02-26',
                '2025-02-27'
              ],
              weather_code: [
                80, 61, 61, 61,
                61, 80,  3
              ],
              temperature_2m_max: [
                12.4, 10.7, 11.2,
                10.5,  9.8,  8.6,
                 7.7
              ],
              temperature_2m_min: [
                10.9, 9.8, 8.4,
                 9.9, 8.4, 7.7,
                 6.6
              ]
            }
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
                                return updateWeatherForLocation(user._id, location, weatherData)
                                    .then((locationWeatherUpdated) => {
                                        console.log(Object.keys(locationWeatherUpdated._doc))
                                        console.log(locationWeatherUpdated, 'imprimiendo weather updated aqui en el test')
                                        expect(locationWeatherUpdated).to.have.property('current')
                                        expect(locationWeatherUpdated).to.have.property('dailyForecast')
                                    })
                            })
                    })
            })     
    })       
})
