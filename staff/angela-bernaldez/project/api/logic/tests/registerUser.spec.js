import 'dotenv/config'
import registerUser from '../registerUser.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'
import { Errors } from 'common'

const { User } = models

describe('registerUser', () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  beforeEach(async () => {
    await User.deleteMany()
  })

  after(() => mongoose.disconnect())

  it('should create a new user with valid data', async () => {
    const username = 'testuser'
    const email = 'testuser@mail.com'
    const password = '12345678'

    const user = await registerUser(username, email, password)

    expect(user).to.exist
    expect(user).to.have.property('username', username)
    expect(user).to.have.property('email', email)

    const isPasswordHashed = await bcrypt.compare(password, user.password)
    expect(isPasswordHashed).to.be.true
  })

  it('should throw DuplicityError if email already exists', async () => {
    const email = 'test@mail.com'
    await User.create({
      username: 'existing',
      email,
      password: '12345678'
    })

    try {
      await registerUser('newuser', email, '87654321')
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.DuplicityError)
      expect(error.message).to.equal('Email already in use')
    }
  })
})
