const fs = require("fs");
const path = require("path");
const read = require("./read.js");

function create(data) {
    const { name, birthdate, phone, } = data;
    read((users) => {
        const isEmailDuplicated = users.some((user) => user.email === email);
        if (isEmailDuplicated) throw new Error("User already exists");

        const id = users[users.length -1].id + 1;
        users.push({
            id,
            name,
            birth_date: birthdate,
            phone,
            email, 
            password,
        });

        fs.writeFile(
            path.join(__dirname, "../../database/uers.json"),
            JSON.stringify({ users: users}),
            "utf-8",
            (err) => {
                console.log(err);
            }
        );
    });
}

module.exports = create