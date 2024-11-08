const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs').promises
const path = require("path");

const server = express()
const port = 4321

const jsonBodyParser = bodyParser.json()


function readAll() {
    fs.readFile(
      path.join(__dirname, "./db/users.json"),
      "utf-8",
      (err, _data) => {
        if (err) return err;
        else {
            const data = JSON.parse(_data);
            return data
        }
    })
};

function writeAll(users) {
    fs.writeFile(
        path.join(__dirname, "./db/users.json"),
        JSON.stringify({ users }),
        "utf-8",
        (err) => {
            if (err) return err;
        }
    );
}

// Add users: POST
server.post("/users", jsonBodyParser, async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, './db/users.json'), 'utf-8');
        let users = []
        if (data) {
            users = JSON.parse(data);
        }
        // res.send(users);
        const { username, password } = req.body
        console.log(users)
        users.push({ username, password })
    
        fs.writeFile(
            path.join(__dirname, './db/users.json'),
            JSON.stringify( users ),
            'utf-8'
        );
        res.send("user registered correctly")
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

// Change password: PATCH (actualizacion parcial)
server.patch("/users", jsonBodyParser, async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, './db/users.json'), 'utf-8');
        const users = JSON.parse(data);
        // res.send(users);

        const { username, password, newPassword } = req.body

        const userIndex = users.findIndex(user => user.username === username)
    
        if (users[userIndex].password !== password) res.status(401).send("That's not your password!")
        else {
            users[userIndex].password = newPassword;
    
            fs.writeFile(
                path.join(__dirname, './db/users.json'),
                JSON.stringify( users ),
                'utf-8'
            );
            res.send('New password set');
        }
      } catch (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).send('Error interno del servidor');
    }
})

// Change all details: PUT (actualizacion total)
server.put('/users', jsonBodyParser, async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, './db/users.json'), 'utf-8');
        const users = JSON.parse(data);
        // res.send(users);
      } catch (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).send('Error interno del servidor');
    }
    const { username, password, newUsername, newPassword } = req.body;

    const userIndex = users.findIndex(user => user.username === username);

    if (users[userIndex].password !== password) res.status(401).send("That's not your password!");
    else {
        users[userIndex].username = newUsername;
        users[userIndex].password = newPassword;

        fs.writeFile(
            path.join(__dirname, './db/users.json'),
            JSON.stringify( users ),
            'utf-8'
        );
        res.send('User reset completely');
    }
})

// Delete user: DELETE
server.delete('/users', jsonBodyParser, async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, './db/users.json'), 'utf-8');
        const users = JSON.parse(data);
        // res.send(users);
      } catch (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).send('Error interno del servidor');
    }
    const { username, password } = req.body;

    const userIndex = users.findIndex(user => user.username === username);

    if (users[userIndex].password !== password) res.status(401).send("You can't delete me!");
    else {
        users.splice(userIndex, 1);
        fs.writeFile(
            path.join(__dirname, './db/users.json'),
            JSON.stringify({ users }),
            'utf-8'
        );
        res.send('User deleted correctly');
    }
})

server.listen(port, () => {
    console.log(`Server running on port:`, port)
})
