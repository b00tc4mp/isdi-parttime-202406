import 'dotenv/config';
import authenticateUser from './authenticateUser.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { assert, expect } from 'chai'

const { User } = models;

describe('Authenticate user', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())

    it('returns id if user exist and password is correct', function (done) {
        return bcrypt.hash('123456789', 1)
        .then((cryptPassword) => {
            console.log(1)
                const user = {
                    username: 'NombreTest',
                    dateOfBirth: new Date('07/20/1995'),
                    email: 'nombre@mail.com',
                    password: cryptPassword
                }
                console.log(2)
                return User.create(user)
                    .then((user) => {
                        console.log(3)
                        return authenticateUser('nombre@mail.com', '123456789')
                            .then(() => {
                                expect(2).to.equal(2);
                                done()

                            }).catch(done)
                    })
         })
    })
})