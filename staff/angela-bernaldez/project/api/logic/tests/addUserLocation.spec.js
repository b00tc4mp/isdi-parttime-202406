import 'dotenv/config'
import addUserLocation from '../addUserLocation.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'
import { Errors } from 'common'

const { User, Location } = models

describe('addUserLocation', () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  let user, location

  beforeEach(async () => {
    await User.deleteMany()
    await Location.deleteMany()

    const cryptPassword = await bcrypt.hash('123456789', 1)

    user = await User.create({
      username: 'nametest',
      email: 'test@mail.com',
      password: cryptPassword,
    })

    location = {
      name: 'Brighton',
      latitude: 51,
      longitude: -0.5,
      timeLastUpdated: new Date(),
    }
  })

  after(() => mongoose.disconnect())

  it('adds location when it does not exist and user has no fav locations', async () => {
    const userModified = await addUserLocation(user._id.toString(), location, false)
    const newLocation = await Location.findOne({ name: 'Brighton' })

    expect(userModified.favLocations).to.include(newLocation._id)
  })

  it('adds location when it already exists but not for that user', async () => {
    const newLocation = await Location.create(location)
    const userModified = await addUserLocation(user._id.toString(), location, false)

    expect(userModified.favLocations).to.include(newLocation._id)
  })

  it('does not duplicate location if already exists in user favLocations', async () => {
    const newLocation = await Location.create(location)
    user.favLocations.push(newLocation._id)
    await user.save()

    const userModified = await addUserLocation(user._id.toString(), location, false)

    expect(userModified.favLocations.length).to.equal(1)
    expect(userModified.favLocations[0].toString()).to.equal(newLocation._id.toString())
  })

  it('sets location as currentLocation when isCurrentLocation is true', async () => {
    const userModified = await addUserLocation(user._id.toString(), location, true)
    const newLocation = await Location.findOne({ name: 'Brighton' })

    expect(userModified.currentLocation.toString()).to.equal(newLocation._id.toString())
  })

  it('throws error if user does not exist', async () => {
    try {
      await addUserLocation('000000000000000000000000', location, false)
    } catch (error) {
        expect(error).to.be.instanceOf(Errors.AuthError)
      expect(error.message).to.equal('User id does not belong to anyone')
    }
  })
})
