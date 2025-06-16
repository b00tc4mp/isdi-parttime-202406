import 'dotenv/config';
import updateBio from './updateBio.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import { expect } from 'chai'

const { User } = models;

describe('updateBio', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('updates bio', () => {
        const user = {
            username: 'NombreTest',
            dateOfBirth: new Date('07/20/1995'),
            email: 'nombre@mail.com',
            password: 'cryptPassword'
        };
        return User.create(user)
            .then((user) => {
                const id = user._id.toString()
                return updateBio(id, 'am i a bio text? who knows')
                    .then(() => {
                        return User.findById(id)
                            .then((user) => {
                                expect(user.bio).to.equal('am i a bio text? who knows');
                            })
                    })
            })

    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})