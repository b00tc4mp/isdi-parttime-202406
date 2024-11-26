import 'dotenv/config';
import deleteUser from './deleteUser.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { expect } from 'chai'

const { User } = models;

describe('deleteUser', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());

    it('deletes user if exists and password is correct', () => {
        return bcrypt.hash('123456789', 1)
            .then((cryptPassword) => {
                const user = {
                    username: 'NombreTest',
                    dateOfBirth: new Date('07/20/1995'),
                    email: 'nombre@mail.com',
                    password: cryptPassword
                };
                return User.create(user)
                    .then((user) => {
                        const id = user._id.toString()
                        return deleteUser(id, '123456789')
                            .then(() => {
                                User.findById(id).then((user) => {
                                    expect(user).to.be(null)
                                })
                            })
                    })
            })
    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})