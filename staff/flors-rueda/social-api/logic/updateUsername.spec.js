import 'dotenv/config';
import updateUsername from './updateUsername.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import { expect } from 'chai'

const { User } = models;

describe('updateUsername', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('updates username', () => {
        const user = {
            username: 'NombreTest',
            dateOfBirth: new Date('07/20/1995'),
            email: 'nombre@mail.com',
            password: 'cryptPassword'
        };
        return User.create(user)
            .then((user) => {
                const id = user._id.toString()
                return updateUsername(id, 'newname')
                    .then(() => {
                        return User.findOne({ username: 'newname' })
                            .then((user) => {
                                expect(user.username).to.equal('newname');
                            })
                    })
            })

    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})