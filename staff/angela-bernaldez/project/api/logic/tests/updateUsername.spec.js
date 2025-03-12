import 'dotenv/config'
import updateUsername from '../updateUsername.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'

const { User } = models

describe('updateUsername', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))

    let user
    beforeEach(async () => {
        await User.deleteMany()

        // when creating user, password needs to be crypted
        const _user = await User.create({
            username: 'nametest',
            email: 'test@mail.com',
            password: '123456789'
        }) 
        user = _user
    })

    afterEach(() => User.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('updates user username', () => {
        return updateUsername(user._id.toString(), 'newUsername')
            .then(() => {
                return User.findById(user._id.toString())
                    .then((userUpdated) => {
                        expect(userUpdated.username).to.equal('newUsername')
                    })
            })
    })
})