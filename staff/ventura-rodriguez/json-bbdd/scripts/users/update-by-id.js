const fs = require("fs");
const path = require("path");
const read = require("./read.js");

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
      path.join(__dirname, "../../bbdd/users.json"),
      JSON.stringify({ users: users }),
      "utf-8",
      (err) => {
        console.log(err);
      }
    );
  });
}

updateById(0, { phone: "+34 111111111" });

module.exports = updateById;
