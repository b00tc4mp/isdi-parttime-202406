import 'dotenv/config'
import updateWeatherForLocation from '../updateWeatherForLocation.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'
import { Errors } from 'common'

const { User, Location } = models

describe('updateWeatherForLocation', () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  let user, location, weatherData

  beforeEach(async () => {
    location = await Location.create({
      name: 'London',
      latitude: 51.5074,
      longitude: -0.1278,
      timeLastUpdated: new Date()
    })

    const cryptPassword = await bcrypt.hash('123456789', 1)

    user = await User.create({
      username: 'testuser',
      email: 'test@mail.com',
      password: cryptPassword,
      favLocations: [location._id],
      currentLocation: location._id
    })

    weatherData = {
      current: {
        temperature_2m: 15,
        wind_speed_10m: 5,
      },
      current_units: {
        temperature_2m: '°C',
        wind_speed_10m: 'km/h',
      },
      daily: {
        temperature_2m_max: [18],
        temperature_2m_min: [10],
      },
      daily_units: {
        temperature_2m_max: '°C',
        temperature_2m_min: '°C',
      }
    }
  })

  afterEach(async () => {
    await User.deleteMany()
    await Location.deleteMany()
  })

  after(() => mongoose.disconnect())

  it('updates weather data for a user location', async () => {
    await updateWeatherForLocation(user._id.toString(), location, weatherData)

    const updatedLocation = await Location.findById(location._id)

    expect(updatedLocation.current.temperature_2m).to.equal(15)
    expect(updatedLocation.dailyForecast.temperature_2m_max[0]).to.equal(18)
    expect(updatedLocation.timeLastUpdated).to.be.a('date')
  })

  it('throws AuthError if user not found', async () => {
    try {
      await updateWeatherForLocation('000000000000000000000000', location, weatherData)
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.AuthError)
      expect(error.message).to.equal('User id does not belong to anyone')
    }
  })

  it('throws ExistenceError if location not in DB', async () => {
    await location.deleteOne()
    try {
      await updateWeatherForLocation(user._id.toString(), location, weatherData)
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.ExistenceError)
      expect(error.message).to.equal('Location does not exist in the database. It needs to be added first.')
    }
  })

  it('throws ExistenceError if user does not have the new location saved', async () => {
    const newLocation = await Location.create({
      name: 'New York',
      latitude: 40.7128,
      longitude: -74.0060,
      timeLastUpdated: new Date()
    })
  
    try {
      await updateWeatherForLocation(user._id.toString(), newLocation, weatherData)
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.ExistenceError)
      expect(error.message).to.equal('User does not have the requested location to fetch weather data')
    }
  })
})
