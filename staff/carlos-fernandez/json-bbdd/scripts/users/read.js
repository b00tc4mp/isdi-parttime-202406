const fs = require("fs");

function read() {
  // __dirname: arranca la ruta desde donde está el archivo read.js
  fs.readFile(__dirname + "/../../bbdd/users.json", "utf-8", (err, _data) => {
    if (err) throw err;

    const data = JSON.parse(_data);
    console.table(data.user);
  });
}

read();
