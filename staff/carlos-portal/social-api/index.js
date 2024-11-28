// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html
// https://www.npmjs.com/package/dotenv

import express, { json } from 'express';
import handlers from './handlers/index.js';
import { errorHandler, verifyToken } from './middlewares/index.js';
import 'dotenv/config'
import cors from 'cors'
import { Errors } from 'social-common';
import mongoose from 'mongoose';


try {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.info(`connected to db: ${process.env.MONGO_URI}`);

            const server = express();

            const jsonBodyParser = json();

            server.use(cors())

            server.post('/users', jsonBodyParser, /*Más middlewares*/ handlers.registerUser);

            server.post('/users/auth', jsonBodyParser, handlers.authenticateUser)

            server.get('/users/auth', verifyToken, handlers.getAuthUser)

            server.get('/users', verifyToken, handlers.getAllUsers);

            server.get('/users/:username', verifyToken, handlers.getOneUser);

            server.patch('/users/username', verifyToken, jsonBodyParser, handlers.updateUsername);

            server.patch('/users/email', verifyToken, jsonBodyParser, handlers.updateEmail);

            server.patch('/users/password', verifyToken, jsonBodyParser, handlers.updatePassword);

            server.patch('/users/bio', verifyToken, jsonBodyParser, handlers.updateBio);

            server.patch('/users/avatar', verifyToken, jsonBodyParser, handlers.updateAvatar);

            server.delete('/users', verifyToken, jsonBodyParser, handlers.deleteUser);

            server.post('/posts', verifyToken, jsonBodyParser, handlers.createPost);

            server.get('/posts', verifyToken, handlers.getAllPosts)

            server.use(errorHandler);

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



