// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html

import express, { json } from 'express';
import fs from 'fs';
import handlers from './handlers/index.js';

const server = express();
const port = 4321;

const jsonBodyParser = json();

server.post('/users', jsonBodyParser, (req, res) => handlers.registerUser(req, res));

server.get('/users', (req, res) => handlers.getAllUsers(req, res));

server.get('/users/:idRequested', (req, res) => handlers.getOneUser(req, res));


//TODO: Añadir un delete, patch username, patch email, patch password

server.listen(port, () => {
    console.log(`Server running on port:`, port)
})