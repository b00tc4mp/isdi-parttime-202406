import 'dotenv/config';
import getAllUsers from './getAllUsers.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import { expect } from 'chai'

const { User } = models;

describe('getAllUsers', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());

    it('returns array with all users username and avatar if logged in user exists', () => {
        const user1 = {
            username: 'NombreTest',
            dateOfBirth: new Date('07/20/1995'),
            email: 'nombre@mail.com',
            password: 'cryptPassword',
            avatar: 'avatar.com/url.jpg'
        };
        const user2 = {
            username: 'NombreTest2',
            dateOfBirth: new Date('09/20/1995'),
            email: 'nombre2@mail.com',
            password: 'cryptPassword'
        };
        return User.create(user1)
            .then((user) => {
                const id = user._id.toString()
                return User.create(user2)
                    .then((user) => {
                        const id = user._id.toString()
                        return getAllUsers(id)
                            .then((users) => {
                                expect(users.length).to.equal(2);
                                expect(users[0].username).to.equal(user1.username);
                                expect(users[0].password).to.equal(undefined);
                                expect(users[0].avatar).to.equal(user1.avatar);
                                expect(users[0]._id).to.equal(undefined);
                                expect(users[1].username).to.equal(user2.username);
                                expect(users[1].password).to.equal(undefined);
                                expect(users[1].avatar).to.equal(user2.avatar);
                                expect(users[1]._id).to.equal(undefined);
                            })
                    })
            })
    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})