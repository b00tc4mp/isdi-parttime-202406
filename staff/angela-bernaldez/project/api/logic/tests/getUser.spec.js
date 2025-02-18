import bcrypt from 'bcrypt'
import 'dotenv/config'
import getUser from '../getUser.js'
import { describe, it } from 'mocha'
import models from '../../data/models.js'
import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'

const { User } = models
const { ObjectId } = Types

describe('getAllUserLocations', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('returns all user locations when at least one exists', () => { 
        return bcrypt.hash('123456789', 1)
            .then((cryptPassword) => {
                const user = {
                    username: 'nametest',
                    email: 'test@mail.com',
                    password: cryptPassword,
                    favLocations: [
                        new mongoose.Types.ObjectId(),
                        new mongoose.Types.ObjectId()],
                    currentLocation: new mongoose.Types.ObjectId()
                }
                return User.create(user)
                    .then((user) => {
                        const userId  = user._id.toString()
                        return getUser(userId) 
                            .then((user) => {
                                expect(user.username).to.equal('nametest')
                                expect(user.email).to.equal('test@mail.com')
                                expect(user._id).to.be.instanceOf(ObjectId)
                                expect(user.favLocations.length).to.equal(2)
                                expect(user.currentLocation).to.be.instanceOf(ObjectId)

                            })
                    })
            })
    })
})