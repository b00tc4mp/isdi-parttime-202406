const fs = require("fs");
const path = require("path");
const readAll = require("./read-all");
const { EmailNotValidError, DniInvalidFormatError } = require("../../errors");

function createOne(data, callback) {
  const { name, birthDate, phone, dni, email, password } = data;
  const emailRegexp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (!emailRegexp.test(email))
    throw new EmailNotValidError("Email is not valid");

  const dniRegExp = new RegExp(/^(\d{8})([A-Z])$/);
  if (!dniRegExp.test(dni)) throw new DniInvalidFormatError("DNI is not valid");

  readAll((err, users) => {
    if (err) return callback(err);
    const isEmailDuplicated = users.some((user) => user.email === email);
    if (isEmailDuplicated) return callback(new Error("Email already in use"));

    const isDniDuplicated = users.some((user) => user.dni === dni);
    if (isDniDuplicated) return callback(new Error("DNI already in use"));

    const id = users[users.length - 1].id + 1;
    users.push({
      id,
      name,
      birth_date: birthDate,
      phone,
      dni,
      email,
      password,
    });
    fs.writeFile(
      path.join(__dirname, "../../database/users.json"),
      JSON.stringify({ users: users }),
      "utf-8",
      (err) => {
        if (err) return callback(err);

        callback(null, id);
      }
    );
  });
}

module.exports = createOne;
