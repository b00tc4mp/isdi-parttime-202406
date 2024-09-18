const fs = require("fs")
const path = require("path")



function readOne(id, callback) {

    fs.readFile(
        path.join(__dirname, "../../database/users.json"),
        "utf-8",
        (err, _data) => {
            if (err) throw err;
      
            const data = JSON.parse(_data);

            const user = data.users.filter((_user) => _user.id === id)[0]

            // if (!user) throw new Error 

            callback(user);
        }
    )
}

module.exports = readOne

const id = 1

readOne(id, (user) => {
    console.log(user)
})