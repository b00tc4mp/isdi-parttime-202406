const fs = require('fs');
const path = require('path');
const read = require('./read-all.js')

function updateById(id, data) {
  if (typeof id !== 'number') throw new TypeError('id is not a number');

  const {name, birth_date, phone} = data;
  read((users) => {
    users.forEach((user) => {
      if (user.id === id) {
        user.name = name ?? user.name;
        user.birth_date = birth_date ?? user.birth_date;
        user.phone = phone ?? user.phone;
      }
    });

    fs.writeFile(
      path.join(__dirname,"/../../bbdd/users.json"),
      JSON.stringify({ users: users}),
      'utf-8',
      (err) => {
        if (err) throw err;
      }
    );
  });
}

module.exports = updateById;