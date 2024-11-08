// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html

import express, { json } from 'express';
import fs from 'fs';

const server = express();
const port = 4321;

const jsonBodyParser = json();


server.get('/', (req, res) => {
    res.send('hola mundo');
})

// index.js --> server.get("/users", jsonBodyParser, (req, res) => handlers.registerUser(req, res))

//handlers --> registerUser(req, res) => { const {}}



server.post("/users", jsonBodyParser, async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, './db/users.json'), 'utf-8');
        let users = []
        if (data) {
            users = JSON.parse(data);
        }
        // res.send(users);
        const { username, password } = req.body // esto se manejaria en el handlers
        console.log(users)
        users.push({ username, password })

        fs.writeFile(
            path.join(__dirname, './db/users.json'),
            JSON.stringify(users),
            'utf-8'
        );
        res.send("user registered correctly") //iria en el handlers
    } catch (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).send('Error interno del servidor');
    }
})

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
    }
});

server.listen(port, () => {
    console.log(`Server running on port:`, port)
})