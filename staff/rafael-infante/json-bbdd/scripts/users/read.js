const fs = require("fs");

function read(callback) {
  
  fs.readFile(__dirname + '/../../bbdd/users.json', 'utf-8', (err, _data) => {
    if (err) throw err;
    
    const data = JSON.parse(_data)
    callback(data.users);
  })
}

module.exports = read;