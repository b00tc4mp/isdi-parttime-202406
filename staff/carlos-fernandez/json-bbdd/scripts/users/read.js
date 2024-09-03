const fs = require("fs");

// creamos una función que lea lo que hay en users.json

function read(callback) {
  // __dirname: arranca la ruta desde donde está el archivo read.js, sale dos niveles y vuelve a entrar hasta users.json, que es donde esta la data
  // fs.readFile( ): método que accede al archivo indicado en la ruta y devuelve el contenido en formato buffer

  fs.readFile(__dirname + "/../../bbdd/users.json", "utf-8", (err, _data) => {
    if (err) throw err;

    // JSON.parse( ): método que convierte de buffer a objeto
    const data = JSON.parse(_data);

    // devuelve una tabla con el contenido de users alojado en users.json
    callback(data.users);
  });
}

module.exports = read;
