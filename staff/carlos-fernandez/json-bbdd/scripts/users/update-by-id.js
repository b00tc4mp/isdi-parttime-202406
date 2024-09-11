const fs = require("fs");
const path = require("path");
const read = require("./read-all.js");
const { NotAnIntegerError } = require("../../errors");

function updateById(id, data) {
  if (typeof id !== "number") throw new TypeError("Id is not a number");
  if (isNaN(id) || id < 0 || id === Infinity)
    throw new RangeError("Id is out of range");
  if (!Number.isInteger(id))
    throw new NotAnIntegerError("Id is not an integer");
  const { name, birthDate, phoneNumber } = data;
  read((users) => {
    users.forEach((user) => {
      if (user.id === id) {
        user.name = name ?? user.name;
        user.birth_date = birthDate ?? user.birth_date;
        user.phone_number = phoneNumber ?? user.phone_number;
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
