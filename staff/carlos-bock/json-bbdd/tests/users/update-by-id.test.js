const fs = require("fs");
const path = require("path");
const read = require("./read-all.test.js");
const { NotAnIntegerError } = require("../errors/index.js");

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
});
}

module.exports = updateById;