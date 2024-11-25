import cors from 'cors'
import 'dotenv/config'
import express, { json } from 'express'
import handlers from './handlers/index.js'
import { errorHandler } from './middlewares/index.js'
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

            data.users = users

            const server = express()

            server.use(cors())

            server.post('/users', jsonBodyParser, /*Más middlewares*/ handlers.registerUser)

            server.post('/users/auth', jsonBodyParser, handlers.authenticateUser)

            server.get('/users/auth', handlers.getAuthUser)

            server.get('/users', handlers.getAllUsers)

            server.get('/users/:username', handlers.getOneUser)

            server.patch('/users/username', jsonBodyParser, handlers.updateUsername)

            server.patch('/users/email', jsonBodyParser, handlers.updateEmail)

            server.patch('/users/password', jsonBodyParser, handlers.updatePassword)

            server.delete('/users', jsonBodyParser, handlers.deleteUser)

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
