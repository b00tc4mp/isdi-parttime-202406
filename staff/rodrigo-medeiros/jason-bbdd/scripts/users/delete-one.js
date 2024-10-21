const fs = require("fs");
const path = require("path");
const readAll = require("./read-all");
const { NotFoundError, CredentialsError } = require("../../errors");

function deleteOne(id, password, callback) {
  readAll((err, users) => {
    if (err) throw err;
    const user = users?.filter((_user) => _user.id === id)[0];
    if (!user) return callback(new NotFoundError("User not found"));

    if (!(user.password === password))
      return callback(new CredentialsError("Password doesn't match"));
    const newUsers = users.filter((_user) => !(_user.id === id));

    fs.writeFile(
      path.join(__dirname, "../../database/users.json"),
      JSON.stringify({ users: newUsers }),
      "utf-8",
      (err) => {
        if (err) return callback(err);
        callback(null, true);
      }
    );
  });
}

module.exports = deleteOne;
