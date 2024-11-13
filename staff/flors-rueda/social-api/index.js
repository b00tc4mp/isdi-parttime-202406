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

server.use(errorHandler)


//TODO: Añadir un delete, patch username, patch email, patch password

server.listen(port, () => {
    console.log(`Server running on port:`, port)
})