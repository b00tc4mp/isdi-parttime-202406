import 'dotenv/config'
import getUser from '../getUser.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'

const { User } = models
import { Errors } from 'common'

describe('getUser', () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  let user

  beforeEach(async () => {
    await User.deleteMany()

    const cryptPassword = await bcrypt.hash('123456789', 1)
    user = await User.create({
      username: 'nametest',
      email: 'test@mail.com',
      password: cryptPassword,
    })
  })

  after(() => mongoose.disconnect())

  it('should return public user info without password and with id instead of _id', async () => {
    const publicInfo = await getUser(user._id.toString())

    expect(publicInfo).to.have.property('id', user._id.toString())
    expect(publicInfo).to.have.property('username', 'nametest')
    expect(publicInfo).to.have.property('email', 'test@mail.com')

    expect(publicInfo).to.not.have.property('password')
    expect(publicInfo).to.not.have.property('_id')
  })

  it('should throw AuthError if user does not exist', async () => {
    try {
      await getUser('000000000000000000000000')
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.AuthError)
      expect(error.message).to.equal('User id does not belong to anyone')
    }
  })
})
