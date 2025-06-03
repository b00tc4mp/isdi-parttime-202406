import 'dotenv/config'
import retrieveNominatimLocations from '../retrieveNominatimLocations.js'
import { describe, it, before, afterEach, after } from 'mocha'
import mongoose from 'mongoose'
import { expect } from 'chai'
import sinon from 'sinon'
import bcrypt from 'bcrypt'
import models from '../../data/models.js'
import { Errors } from 'common'

const { User } = models

describe('retrieveNominatimLocations', () => {
  let user
  let fetchStub

  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  beforeEach(async () => {
    await User.deleteMany()

    const cryptPassword = await bcrypt.hash('123456789', 1)
    
    user = await User.create({
      username: 'testuser',
      email: 'test@mail.com',
      password: cryptPassword
    })

    fetchStub = sinon.stub(global, 'fetch').resolves({
      ok: true,
      json: () => Promise.resolve([
        {
          display_name: 'Madrid, Spain',
          lat: '40.416775',
          lon: '-3.703790'
        }
      ])
    })
  })

  afterEach(async () => {
    fetchStub.restore()
    await User.deleteMany()
  })

  after(() => mongoose.disconnect())

  it('returns locations array for a valid location string', async () => {
    const result = await retrieveNominatimLocations(user._id.toString(), 'Madrid')

    expect(result).to.be.an('array')
    expect(result[0]).to.include({ display_name: 'Madrid, Spain' })
  })

  it('throws AuthError if user does not exist', async () => {
    try {
      await retrieveNominatimLocations('000000000000000000000000', 'Madrid')
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.AuthError)
      expect(error.message).to.equal('User id does not belong to anyone')
    }
  })

  it('throws NominatimAPIConnectionError if fetch fails', async () => {
    fetchStub.restore()
    fetchStub = sinon.stub(global, 'fetch').resolves({ ok: false })

    try {
      await retrieveNominatimLocations(user._id.toString(), 'Barcelona')
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.NominatimAPIConnectionError)
      expect(error.message).to.equal('Unable to stablish connection with Nominatim API')
    }
  })

  it('throws LocationNotFoundError if no locations are found', async () => {
    fetchStub.restore()
    fetchStub = sinon.stub(global, 'fetch').resolves({
      ok: true,
      json: () => Promise.resolve([]),
    })

    try {
      await retrieveNominatimLocations(user._id.toString(), 'InvalidPlace123')
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.LocationNotFoundError)
      expect(error.message).to.equal('Unable to find locations with the provided location string')
    }
  })
})
