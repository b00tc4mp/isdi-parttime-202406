import 'dotenv/config';
import getAuthUser from './getAuthUser.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import { expect } from 'chai'

const { User } = models;

describe('getAuthUser', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('returns user username if exists', () => {
        const user = {
            username: 'NombreTest',
            dateOfBirth: new Date('07/20/1995'),
            email: 'nombre@mail.com',
            password: 'cryptPassword'
        };
        return User.create(user)
            .then((user) => {
                const id = user._id.toString()
                return getAuthUser(id)
                    .then((username) => {
                        expect(username).to.equal(user.username)
                    })
            })
    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})