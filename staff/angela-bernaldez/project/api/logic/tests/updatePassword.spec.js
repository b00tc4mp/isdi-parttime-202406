import 'dotenv/config'
import updatePassword from '../updatePassword.js'
import { describe, it } from 'mocha'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'
import models from '../../data/models.js'
import { Errors } from 'common'

const { User } = models

describe('updatePassword', () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  let user
  const oldPassword = 'abc12345'
  const newPassword = 'newpass123'

  beforeEach(async () => {
    await User.deleteMany()

    const cryptPassword = await bcrypt.hash(oldPassword, 1)

    user = await User.create({
      username: 'changepass',
      email: 'changepass@mail.com',
      password: cryptPassword
    })
  })

  after(() => mongoose.disconnect())

  it('should change the password successfully', async () => {
    await updatePassword(user._id.toString(), oldPassword, newPassword)

    const updatedUser = await User.findById(user._id)
    const isPasswordUpdated = await bcrypt.compare(newPassword, updatedUser.password)

    expect(isPasswordUpdated).to.be.true
  })

  it('should throw AuthError if user does not exist', async () => {
    try {
      await updatePassword('000000000000000000000000', oldPassword, newPassword)
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.AuthError)
      expect(error.message).to.equal('User id does not belong to anyone')
    }
  })

  it('should throw CredentialsError if old password is incorrect', async () => {
    try {
      await updatePassword(user._id.toString(), 'wrongpassword2', newPassword)
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.CredentialsError)
      expect(error.message).to.equal('Wrong Password')
    }
  })
})
