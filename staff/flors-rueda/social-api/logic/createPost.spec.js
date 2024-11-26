import 'dotenv/config';
import createPost from './createPost.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import { expect } from 'chai'

const { User, Post } = models;

describe('createPost', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => {
        return User.deleteMany()
            .then(() => {
                return Post.deleteMany()
            })
    });

    it('creates post', () => {
        const user = {
            username: 'NombreTest',
            dateOfBirth: new Date('07/20/1995'),
            email: 'nombre@mail.com',
            password: 'cryptPassword'
        };
        return User.create(user)
            .then((user) => {
                const id = user._id.toString()
                return createPost(id, 'hola soy un post', undefined, 'private')
                    .then(() => {
                        return Post.find()
                            .then((posts) => {
                                const post = posts[0];
                                const creationTime = (post.createdAt).getTime()

                                expect(posts.length).to.equal(1)
                                expect(post.author).to.deep.equal(user._id)
                                expect(post.content).to.equal('hola soy un post')
                                //expect(creationTime).to.be.closeTo(Date.now(), 5000)
                                expect(post.visibility).to.equal('private')
                            })
                    })
            })
    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})