const fs = require("fs")
const path = require("path")

function readAll(callback) {
    fs.readFile(
        path.join(__dirname, "../../database/users.json"),
        "utf-8",
        (err, _data) => {
            if (err) throw err;
      
            const data = JSON.parse(_data);
            callback(data.users);
        }
    )
}

module.exports = readAll