import 'dotenv/config';
import updatePassword from './updatePassword.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import { expect } from 'chai';
import bcrypt from 'bcrypt'


const { User } = models;

describe('updatePassword', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('updates password', () => {
        return bcrypt.hash('123456789', 1)
            .then((cryptPassword) => {
                const user = {
                    username: 'NombreTest',
                    dateOfBirth: new Date('07/20/1995'),
                    email: 'nombre@mail.com',
                    password: cryptPassword
                }
                return User.create(user)
                    .then((user) => {
                        const id = user._id.toString();
                        return updatePassword(id, 'newpassword', '123456789')
                            .then(() => {
                                return User.findOne({ username: 'NombreTest' })
                                    .then(user => {
                                        return bcrypt.compare('newpassword', user.password)
                                            .then((isPasswordValid) => {
                                                expect(isPasswordValid).to.be.true
                                            })
                                    })
                            })

                    })
            })
    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})