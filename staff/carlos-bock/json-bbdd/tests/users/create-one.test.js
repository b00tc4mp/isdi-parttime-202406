const fs = require("fs");
const path = require("path");
const readAll = require("./read-all.test.js");
const { EmailNotValidError } = require("../errors/index.js");

function createOne(data, callback) {
    const { name, birthDate, phone, email, password } = data;
    const emailRegexp = new RegExp (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!emailRegexp.test(email))
        throw new EmailNotValidError("Email is not valid");
    readAll((users) => {
        const isEmailDuplicated = users.some((user) => user.email === email);
        if (isEmailDuplicated) throw new Error("User already exists");

        const id = users[users.length -1].id + 1 ;
        users.push({
            id,
            name,
            birth_date: birthDate,
            phone,
            email,
            password,
        });

        fs.writeFile(
            path.join(__dirname, "../..database/users.json"),
            JSON.stringify({ users: users}),
            "utf-8",
            (err) => {
                if (err) throw err;

                callback(id);
            }
        );
    });
}

module.exports = createOne; 