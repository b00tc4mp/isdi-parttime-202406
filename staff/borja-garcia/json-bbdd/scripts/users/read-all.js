const fs = require("fs");
const path = require("path");
function readAll(callback) {
  fs.readFile(
    path.join(__dirname, "../../database/users.json"),
    "utf-8",
    (err, _data) => {
      if (err) return callback(err);
      const data = JSON.parse(_data);
      callback(null, data.users);
    }
  );
}
module.exports = readAll;