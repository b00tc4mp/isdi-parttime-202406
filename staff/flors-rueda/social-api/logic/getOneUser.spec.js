import 'dotenv/config';
import getOneUser from './getOneUser.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import { expect } from 'chai'

const { User } = models;

describe('getOneUser', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('returns user info', () => {
        const user1 = {
            username: 'NombreTest',
            dateOfBirth: new Date('07/20/1995'),
            email: 'nombre@mail.com',
            password: 'cryptPassword',
            avatar: 'img.url/example.png',
            bio: 'example of a bio weeeh!'
        };
        const user2 = {
            username: 'NombreTest1',
            dateOfBirth: new Date('07/20/1995'),
            email: 'nombre1@mail.com',
            password: 'cryptPassword',
            avatar: 'img.url/example.png',
            bio: 'example2 of a2 bio2 weeeh!'
        };
        return User.create(user1)
            .then((user) => {
                const id = user._id.toString()
                return User.create(user2)
                    .then(() => {
                        return getOneUser(id, user2.username)
                            .then((retrievedUser) => {
                                expect(retrievedUser.username).to.equal(user2.username);
                                expect(retrievedUser.bio).to.equal(user2.bio);
                                expect(retrievedUser.avatar).to.equal(user2.avatar);
                                expect(retrievedUser.dateOfBirth).to.deep.equal(user2.dateOfBirth);
                                expect(retrievedUser._id).to.equal(undefined);
                            })
                    })

            })
    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})