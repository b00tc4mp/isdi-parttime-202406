// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html

const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const port = 4321;

const jsonBodyParser = bodyParser.json();


const users = [];

server.get('/', (req, res) => {
    res.send('hola mundo');
})
// params = {username: flors}
server.post('/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    users.push({ username, password });
    res.send('User registered correctly');
})

server.get('/users', (req, res) => {
    res.send(users)
})

server.patch('/users', jsonBodyParser, (req, res) => {
    const { username, password, newPassword } = req.body;

    const userIndex = users.findIndex(user => user.username === username);

    if (users[userIndex].password !== password) res.status(401).send("That's not your password!");
    else {
        users[userIndex].password = newPassword;
        res.send('New password set');
    }
})

server.put('/users', jsonBodyParser, (req, res) => {
    const { username, password, newUsername, newPassword } = req.body;

    const userIndex = users.findIndex(user => user.username === username);

    if (users[userIndex].password !== password) res.status(401).send("That's not your password!");
    else {
        users[userIndex].username = newUsername;
        users[userIndex].password = newPassword;
        res.send('User reset completely');
    }
})

server.delete('/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body;

    const userIndex = users.findIndex(user => user.username === username);

    if (users[userIndex].password !== password) res.status(401).send("You can't delete me!");
    else {
        users.splice(userIndex, 1);
        res.send('User deleted correctly');
    }
})

server.listen(port, () => {
    console.log(`Server running on port:`, port)
})