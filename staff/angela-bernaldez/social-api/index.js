import cors from 'cors'
import 'dotenv/config'
import express, { json } from 'express'
import handlers from './handlers/index.js'
import { errorHandler, verifyToken } from './middlewares/index.js'
import { MongoClient } from 'mongodb';
import { Errors } from 'social-common';
import data from './data/index.js';

const mongo = new MongoClient(process.env.MONGO_URI)

try {
    mongo.connect()
        .then(() => {
            console.info(`connected to db: ${process.env.MONGO_URI}`)

            const db = mongo.db('social')

            const users = db.collection('users')
            const posts = db.collection('posts');

            data.users = users
            data.posts = posts

            const server = express()

            const jsonBodyParser = json()

            server.use(cors())

            server.post('/users', jsonBodyParser, handlers.registerUser)

            server.post('/users/auth', jsonBodyParser, handlers.authenticateUser)

            server.get('/users/auth', verifyToken, handlers.getAuthUser)

            server.get('/users', verifyToken, handlers.getAllUsers)

            server.get('/users/:username', verifyToken, handlers.getOneUser)

            server.patch('/users/username', verifyToken, jsonBodyParser, handlers.updateUsername)

            server.patch('/users/email', verifyToken, jsonBodyParser, handlers.updateEmail)

            server.patch('/users/password', verifyToken, jsonBodyParser, handlers.updatePassword)

            server.delete('/users', verifyToken, jsonBodyParser, handlers.deleteUser);

            server.post('/posts', verifyToken, jsonBodyParser, handlers.createPost);

            server.get('/posts', verifyToken, handlers.getAllPosts)

            server.use(errorHandler)

            server.listen(process.env.PORT, () => {
                console.log(`Server running on port:`, process.env.PORT)
            })

        })
        .catch(error => {
            throw new Errors.ServerError(`db error: ${error.message}`)
        })
} catch (error) {
    throw new Errors.UnexpectedError(error.message)
}
