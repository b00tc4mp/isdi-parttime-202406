import 'dotenv/config';
import registerUser from './registerUser.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose, { Types } from 'mongoose';
import { expect } from 'chai'

const { User } = models;
const { ObjectId } = Types;

describe('registerUser', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());

    it('creates a user', () => {
        return registerUser('example', '04/04/1994', 'mail@mail.com', 'contraseña!2')
            .then(() => {
                return User.findOne({ username: 'example' })
                    .then((user) => {
                        expect(user.username).to.equal('example');
                        expect(user.email).to.equal('mail@mail.com');
                        expect(user.dateOfBirth).to.deep.equal(new Date('04/04/1994'));
                        expect(user._id).to.be.instanceOf(ObjectId);
                    })
            })
    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})