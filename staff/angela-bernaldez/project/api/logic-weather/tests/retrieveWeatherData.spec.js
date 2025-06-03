import 'dotenv/config'
import retrieveWeatherData from '../retrieveWeatherData.js'
import { describe, it } from 'mocha'
import mongoose from 'mongoose'
import models from '../../data/models.js'
import { expect } from 'chai'
import bcrypt from 'bcrypt'
import sinon from 'sinon'
import { Errors } from 'common'

const { User, Location } = models

describe('retrieveWeatherData', () => {
  let user, location, fetchStub

  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  beforeEach(async () => {
    await User.deleteMany()
    await Location.deleteMany()

    location = await Location.create({
      name: 'Barcelona',
      latitude: 41.3874,
      longitude: 2.1686,
      timeLastUpdated: new Date()
    })

    const cryptPassword = await bcrypt.hash('123456789', 1)

    user = await User.create({
      username: 'weatherUser',
      email: 'weather@mail.com',
      password: cryptPassword,
      favLocations: [location._id]
    })

    fetchStub = sinon.stub(global, 'fetch').resolves({
      ok: true,
      json: () => Promise.resolve({
        current: {
          temperature_2m: 20,
          relative_humidity_2m: 50
        },
        daily: {
          temperature_2m_max: [25],
          temperature_2m_min: [15]
        }
      })
    })
  })

  afterEach(async () => {
    fetchStub.restore()
    await User.deleteMany()
    await Location.deleteMany()
  })

  after(() => mongoose.disconnect())

  it('retrieves weather data successfully', async () => {
    const data = await retrieveWeatherData(user._id.toString(), {
      name: location.name,
      latitude: location.latitude,
      longitude: location.longitude
    })

    expect(data).to.be.an('object')
    expect(data.current.temperature_2m).to.equal(20)
  })

  it('throws AuthError if user does not exist', async () => {
    try {
      await retrieveWeatherData('000000000000000000000000', {
        name: location.name,
        latitude: location.latitude,
        longitude: location.longitude
      })
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.AuthError)
      expect(error.message).to.equal('User id does not belong to anyone')
    }
  })

  it('throws ExistenceError if location does not exist in DB', async () => {
    await Location.deleteMany()

    try {
      await retrieveWeatherData(user._id.toString(), {
        name: 'Madrid',
        latitude: 40.4168,
        longitude: -3.7038
      })
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.ExistenceError)
      expect(error.message).to.equal('Location does not exist in the database. It needs to be added first.')
    }
  })

  it('throws OpenMeteoAPIConnectionError if fetch fails', async () => {
    fetchStub.restore()
    fetchStub = sinon.stub(global, 'fetch').resolves({ ok: false })

    try {
      await retrieveWeatherData(user._id.toString(), {
        name: location.name,
        latitude: location.latitude,
        longitude: location.longitude
      })
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.OpenMeteoAPIConnectionError)
      expect(error.message).to.equal('Unable to stablish connection with Weather API')
    }
  })
})
