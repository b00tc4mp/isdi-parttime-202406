import 'dotenv/config';
import updateEmail from './updateEmail.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import { expect } from 'chai'

const { User } = models;

describe('updateEmail', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());

    it('updates mail', () => {
        const user = {
            username: 'NombreTest',
            dateOfBirth: new Date('07/20/1995'),
            email: 'nombre@mail.com',
            password: 'cryptPassword'
        };
        return User.create(user)
            .then((user) => {
                const id = user._id.toString()
                return updateEmail(id, 'new@mail.com')
                    .then(() => {
                        return User.findOne({ username: 'NombreTest' })
                            .then((user) => {
                                expect(user.username).to.equal('NombreTest');
                                expect(user.email).to.equal('new@mail.com');
                            })
                    })
            })

    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})