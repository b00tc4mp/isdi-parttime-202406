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
                                const creationTime = (post.createdAt).toLocaleDateString('en-EN')

                                expect(posts.length).to.equal(1)
                                expect(post.author).to.deep.equal(user._id)
                                expect(post.content).to.equal('hola soy un post')
                                //En realidad no hace falta testear la fecha porque viene de una libreria. 
                                // Esto es un parche, lo mejor sería mockearla con un wrapper (ejemplos con jest, otra libreria de testing: https://github.com/jestjs/jest/issues/2234)
                                //Así podría fallar si hacemos el test justo a las 23:59:59 de la noche
                                expect(creationTime).to.equal(new Date().toLocaleDateString('en-EN'))
                                expect(post.visibility).to.equal('private')
                            })
                    })
            })
    })

    // + Unhappy paths asincronos

    // + Unhappy paths sincronos

})