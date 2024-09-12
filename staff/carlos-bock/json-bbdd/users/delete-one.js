const fs = require("fs");
const path = require("path");
const read = require("./read-all.js");
const { NotFoundError, CredentialsError } = require("../errors");

function deleteOne(id, password, callback) {
    read((users) => {
        const user = users.filter((_user) => _user.id === id)[0];
        if (!user) throw new NotFoundError("User not found");

        if (! (user.password === password))
            throw new CredentialsError("Password doesn't match");

        const newUsers = users.filter((_user) => !(_user.id === id));

        fs.writeFile(
            path.join(__dirname, "../..database/users.json"),
            JSON.stringify({ users: newUsers}),
            "utf-8",
            (err) => {
                if (err) throw err;

                callback(true);
            }
        );
    });
}

module.exports = deleteOne;