import 'dotenv/config'
import updateUsername from '../updateUsername.js'
import { describe, it } from 'mocha'
import mongoose from 'mongoose'
import models from '../../data/models.js'
import bcrypt from 'bcrypt'
import { expect } from 'chai'
import { Errors } from 'common'

const { User } = models

describe('updateUsername', () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  let user
  let password = '12345678'

  beforeEach(async () => {
    await User.deleteMany()

    const cryptPassword = await bcrypt.hash(password, 1)

    user = await User.create({
      username: 'oldname',
      email: 'testuser@mail.com',
      password: cryptPassword
    })
  })

  afterEach(() => User.deleteMany())
  after(() => mongoose.disconnect())

  it('successfully updates the username', async () => {
    await updateUsername(user._id.toString(), 'newname')
    const updatedUser = await User.findById(user._id)
    expect(updatedUser.username).to.equal('newname')
  })

  it('throws AuthError if user does not exist', async () => {
    try {
      await updateUsername('000000000000000000000000', 'anyname')
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.AuthError)
      expect(error.message).to.equal('User id does not belong to anyone')
    }
  })
})
