const fs = require('fs');
const path = require('path');
const read = require('./read-all.js');
const NotAnIntegerError = require('../../errors/not-an-integer.js');

function updateById(id, data) {

  if (typeof id !== 'number' || Number.isNaN(id)) throw new TypeError('id is not a number');
  if (!Number.isInteger(id)) throw new NotAnIntegerError('id is not an integer number');

  const { name, birth_date, phone } = data;
  read((users) => {
    users.forEach((user) => {
      if (user.id === id) {
        user.name = name ?? user.name;
        user.birth_date = birth_date ?? user.birth_date;
        user.phone = phone ?? user.phone;
      }
    });
    if (id >= users.length) throw new RangeError('id not found')
    fs.writeFile(
      path.join(__dirname, "/../../bbdd/users.json"),
      JSON.stringify({ users: users }),
      'utf-8',
      (err) => {
        if (err) throw err;
      }
    );
  });
}

module.exports = updateById;