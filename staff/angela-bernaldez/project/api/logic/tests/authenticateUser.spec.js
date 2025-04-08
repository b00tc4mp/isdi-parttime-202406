import 'dotenv/config'
import authenticateUser from '../authenticateUser.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { expect } from 'chai'
import { Errors } from 'common'

const { User } = models

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.MONGO_URI_TEST))

    let user

    beforeEach(async () => {
        await User.deleteMany()
        const cryptPassword = await bcrypt.hash('123456789', 1)

        user = await User.create({
            username: 'nametest',
            email: 'test-mail@mail.com',
            password: cryptPassword
        })
    })

    after(() => mongoose.disconnect())

    it('returns id if user exists and password is correct', async () => {
        const id = await authenticateUser('test-mail@mail.com', '123456789')
        expect(id).to.equal(user._id.toString())
    })

    it('throws error "Wrong Password" if password is incorrect', async () => {
        try {
            await authenticateUser('test-mail@mail.com', 'wrongpassword12')
        } catch (error) {
            expect(error).to.be.instanceOf(Errors.CredentialsError)
            expect(error.message).to.equal('Wrong Password')
        }
    })

    it('throws error "No user with this email" if email does not exist', async () => {
        try {
            await authenticateUser('fake@mail.com', '123456789')
        } catch (error) {
            expect(error).to.be.instanceOf(Errors.ExistenceError)
            expect(error.message).to.equal('No user with this email')
        }
    })
})
