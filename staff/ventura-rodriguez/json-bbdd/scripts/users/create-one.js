const fs = require("fs");
const path = require("path");
const readAll = require("./read-all.js");

function createOne(data) {
  const { name, birthDate, phone, email, password } = data;
  readAll((users) => {
    const isEmailDuplicated = users.some((user) => user.email === email);
    if (isEmailDuplicated) throw new Error("User already exists");

    const id = users[users.length - 1].id + 1;
    users.push({
      id,
      name,
      birth_date: birthDate,
      phone,
      email,
      password,
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

module.exports = createOne;

createOne({});
