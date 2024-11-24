import express, { json } from 'express';
import fs from 'fs';
import handlers from './handlers/index.js';
import { errorHandler } from './middlewares/index.js';

const server = express()
const port = 4321

const jsonBodyParser = json();

server.post('/users', jsonBodyParser, /*Más middlewares*/ handlers.registerUser)

server.get('/users', handlers.getAllUsers)

server.get('/users/:idRequested', handlers.getOneUser)

server.patch('/users/email', jsonBodyParser, handlers.updateEmail);

server.patch('/users/password', jsonBodyParser, handlers.updatePassword)

server.patch('/users/username', jsonBodyParser, handlers.updateUsername)

server.use(errorHandler)

//TODO: Añadir un delete


server.listen(port, () => {
    console.log(`Server running on port:`, port)
})