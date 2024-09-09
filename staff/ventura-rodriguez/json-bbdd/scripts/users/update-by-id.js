const fs = require("fs");
const path = require("path");
const read = require("./read-all.js");
const { NotAnIntegerError } = require("../../errors");

function updateById(id, data) {
  if (typeof id !== "number") throw new TypeError("id is not a number");
  if (id < 0 || id === NaN || id === Infinity)
    throw new RangeError("id is out of range");
  if (!Number.isInteger(id))
    throw new NotAnIntegerError("id is not an integer");
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
      path.join(__dirname, "../../database/users.json"),
      JSON.stringify({ users: users }),
      "utf-8",
      (err) => {
        if (err) throw err;
      }
    );
  });
}

module.exports = updateById;
