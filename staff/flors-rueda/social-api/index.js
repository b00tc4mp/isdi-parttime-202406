// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html

import express, { json } from 'express';
import handlers from './handlers/index.js';
import { errorHandler } from './middlewares/index.js';

const server = express();
const port = 4321;

const jsonBodyParser = json();

server.post('/users', jsonBodyParser, /*Más middlewares*/ handlers.registerUser);

server.get('/users', handlers.getAllUsers);

server.get('/users/:idRequested', handlers.getOneUser);

server.patch('/users/username', jsonBodyParser, handlers.updateUsername);

server.patch('/users/email', jsonBodyParser, handlers.updateEmail);

server.patch('/users/password', jsonBodyParser, handlers.updatePassword);

server.delete('/users', jsonBodyParser, handlers.deleteUser);

server.use(errorHandler);

server.listen(port, () => {
    console.log(`Server running on port:`, port)
})