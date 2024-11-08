// https://expressjs.com/es/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/body-parser.html
const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const server = express();
const port = 4321;

const jsonBodyParser = bodyParser.json();

// params = {username: flors}
server.post("/users", jsonBodyParser, (req, res) => {
  const { username, password } = req.body;

  fs.readFile(
    path.join(__dirname, "./db/users.json"),
    "utf-8",
    (err, _data) => {
      if (err) {
        throw new Error(err);
      }

      const data = JSON.parse(_data);
      const users = data.users;

      //Existe el usuario?
      const userDuplicated = users.some((user) => user.username === username);
      if (userDuplicated) throw new Error("Username already in use");

      //Añadir nuevo usuario a la lista users
      users.push({ username, password }),
        fs.writeFile(
          path.join(__dirname, "./db/users.json"),
          JSON.stringify({ users: users }),
          "utf-8",
          (err) => {
            if (err) return callback(err);

            res.send("User registered correctly");
          }
        );
    }
  );
});

server.get("/users", (req, res) => {
  fs.readFile(
    path.join(__dirname, "./db/users.json"),
    "utf-8",
    (err, _data) => {
      if (err) throw new Error(err);

      const data = JSON.parse(_data);
      res.send(data.users);
    }
  );
});

server.patch("/users", jsonBodyParser, (req, res) => {
  const { username, password, newPassword } = req.body;

  const userIndex = users.findIndex((user) => user.username === username);

  if (users[userIndex].password !== password)
    res.status(401).send("That's not your password!");
  else {
    users[userIndex].password = newPassword;
    res.send("New password set");
  }
});

server.put("/users", jsonBodyParser, (req, res) => {
  const { username, password, newUsername, newPassword } = req.body;

  const userIndex = users.findIndex((user) => user.username === username);

  if (users[userIndex].password !== password)
    res.status(401).send("That's not your password!");
  else {
    users[userIndex].username = newUsername;
    users[userIndex].password = newPassword;
    res.send("User reset completely");
  }
});

server.delete("/users", jsonBodyParser, (req, res) => {
  const { username, password } = req.body;

  const userIndex = users.findIndex((user) => user.username === username);

  if (users[userIndex].password !== password)
    res.status(401).send("You can't delete me!");
  else {
    users.splice(userIndex, 1);
    res.send("User deleted correctly");
  }
});

server.listen(port, () => {
  console.log(`Server running on port:`, port);
});
