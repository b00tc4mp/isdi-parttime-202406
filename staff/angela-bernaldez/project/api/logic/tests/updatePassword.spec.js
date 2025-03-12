import 'dotenv/config'
import updatePassword from '../updatePassword.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import bcrypt from 'bcrypt'

const { User } = models

describe('updatePassword', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))

    let user
    beforeEach(async () => {
        await User.deleteMany()

        const cryptPassword = await bcrypt.hash('123456789', 15)

        const _user = await User.create({
            username: 'nametest',
            email: 'test@mail.com',
            password: cryptPassword
        }) 
        user = _user
    })

    afterEach(() => User.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('updates user password', () => {
        return updatePassword(user._id.toString(), '123456789', 'newPassword')
            .then(() => {
                return User.findById(user._id.toString())
                    .then((userUpdated) => {
                        return bcrypt.compare('newPassword', userUpdated.password)
                            .then((isPasswordCorrect) => {
                                expect(isPasswordCorrect).to.be.true
                            })
                    })
            })
    })
})