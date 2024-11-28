import 'dotenv/config';
import updateAvatar from './updateAvatar.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import { expect } from 'chai'

const { User } = models;

describe('updateAvatar', () => {

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
                return updateAvatar(id, 'http://new.url/avatar.png')
                    .then(() => {
                        return User.findById(id)
                            .then((user) => {
                                expect(user.avatar).to.equal('http://new.url/avatar.png');
                            })
                    })
            })

    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})