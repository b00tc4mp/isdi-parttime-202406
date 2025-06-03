const fs = require("fs");
const path = require("path");
const readAll = require("./read-all.js");
const { NotAnIntegerError } = require("../../errors");

function updateById(id, data, callback) {
  if (typeof id !== "number") throw new TypeError("id is not a number");
  if (id < 0 || id === NaN || id === Infinity)
    throw new RangeError("id is out of range");
  if (!Number.isInteger(id))
    throw new NotAnIntegerError("id is not an integer");
  const { name, birthDate, phone } = data;
  readAll((err, users) => {
    if (err) return callback(err);
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
        if (err) return callback(err);
        callback(null, true);
      }
    );
  });
}

module.exports = updateById;
