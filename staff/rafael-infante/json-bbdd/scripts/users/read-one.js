const fs = require("fs");
const { NotFoundError } = require("../../errors");

function readOne(id, callback) {
  
  fs.readFile(__dirname + '/../../bbdd/users.json', 'utf-8', (err, _data) => {
    if (err) throw err;
    
    const data = JSON.parse(_data)

    const user = data.users.filter((_user) => _user.id === id)[0];

    if (!user) throw new NotFoundError ("User not found");

    callback(user);
  })
}

module.exports = readOne;