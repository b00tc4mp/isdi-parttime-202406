import 'dotenv/config'
import deleteUser from '../deleteUser.js'
import { describe, it } from 'mocha'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'
import models from '../../data/models.js'
import { Errors } from 'common'

const { User } = models

describe('deleteUser', () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST))

  let user
  const plainPassword = '123456789'

  beforeEach(async () => {
    await User.deleteMany()

    const cryptPassword = await bcrypt.hash(plainPassword, 1)

    user = await User.create({
      username: 'deleteuser-test',
      email: 'delete@mail.com',
      password: cryptPassword
    })
  })

  after(() => mongoose.disconnect())

  it('deletes the user if id and password are correct', async () => {
    await deleteUser(user._id.toString(), plainPassword)

    const deleted = await User.findById(user._id)
    expect(deleted).to.be.null
  })

  it('throws AuthError if user does not exist', async () => {
    try {
      await deleteUser('000000000000000000000000', plainPassword)
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.AuthError)
      expect(error.message).to.equal('User id does not belong to anyone')
    }
  })

  it('throws CredentialsError if password is wrong', async () => {
    try {
      await deleteUser(user._id.toString(), 'wrongpassword2')
    } catch (error) {
      expect(error).to.be.instanceOf(Errors.CredentialsError)
      expect(error.message).to.equal('Wrong credentials')
    }
  })
})
