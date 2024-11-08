// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html

import express, { json } from 'express';
import fs from 'fs';
import handlers from './handlers/index.js';

const server = express();
const port = 4321;

const jsonBodyParser = json();

server.post('/users', jsonBodyParser, (req, res) => handlers.registerUser(req, res))

server.get('/users', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, './db/users.json'), 'utf-8');
        let users = []
        if (data) {
            users = JSON.parse(data);
        }
        res.send(users);
    } catch (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).send('Error interno del servidor');
    }  // TODO: Separar por capas este metodo
});

//Añadir un put, un delete, patch username, patch email, patch password

server.listen(port, () => {
    console.log(`Server running on port:`, port)
})