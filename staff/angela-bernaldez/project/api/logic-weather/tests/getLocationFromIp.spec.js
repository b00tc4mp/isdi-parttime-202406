import 'dotenv/config'
import getLocationFromIp from '../getLocationFromIp.js'
import { describe, it, before, afterEach, after } from 'mocha'
import mongoose from 'mongoose'
import { expect } from 'chai'
import bcrypt from 'bcrypt'
import sinon from 'sinon'
import models from '../../data/models.js'
import { Errors } from 'common'

const { User } = models

describe('getLocationFromIp', () => {
  let user
  let fetchStub

  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  beforeEach(async () => {
    await User.deleteMany()

    const cryptPassword = await bcrypt.hash('123456789', 1)

    user = await User.create({
      username: 'nametest',
      email: 'test@mail.com',
      password: cryptPassword
    })

    // mock response of fetch
    fetchStub = sinon.stub(global, 'fetch').resolves({
      ok: true,
      json: () => Promise.resolve({
        status: 'success',
        city: 'Barcelona',
        lat: 41.3851,
        lon: 2.1734
      })
    })
  })

  afterEach(() => {
    fetchStub.restore()
    return User.deleteMany()
  })

  after(() => mongoose.disconnect())

  it('returns current location from IP API', async () => {
    const location = await getLocationFromIp(user._id.toString())

    expect(location).to.deep.equal({
      name: 'Barcelona',
      latitude: 41.3851,
      longitude: 2.1734
    })
  })

  it('throws AuthError if user does not exist', async () => {
    try {
      await getLocationFromIp('000000000000000000000000')
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.AuthError)
      expect(error.message).to.equal('User id does not belong to anyone')
    }
  })

  it('throws GeoLocationAPIError if fetch response is not ok', async () => {
    fetchStub.restore()
    fetchStub = sinon.stub(global, 'fetch').resolves({ ok: false })

    try {
      await getLocationFromIp(user._id.toString())
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.GeoLocationAPIError)
      expect(error.message).to.equal('Unable to stablish connection with IP API to obtain current location')
    }
  })
})
