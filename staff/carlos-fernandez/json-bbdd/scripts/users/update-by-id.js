const fs = require("fs");
const path = require("path");
const read = require("./read-all.js");

function updateById(id, data) {
  const { name, birthDate, phone } = data;
  read((users) => {
    users.forEach((user) => {
      if (user.id === id) {
        user.name = name ?? user.name;
        user.birth_date = birthDate ?? user.birth_date;
        user.phone = phone ?? user.phone;
      }
    });

    fs.writeFile(
      path.join(__dirname, "../../database/user.json"),
      JSON.stringify({ users: users }),
      "utf-8",
      (err) => {
        if (err) throw err;
      }
    );
  });
}

module.exports = updateById;
