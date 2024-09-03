const fs = require("fs");
const path = require("path");
const read = require("./read.js");

function create(data) {
    const { name, birthDate, phone, email, password } = data;
    read((users) => {
        const isEmailDuplicated = users.some((user) => user.email === email);
        if (isEmailDuplicated) throw new Error("user already exists");

        const id = users[users.length - 1].id + 1;
        users.push({
            id,
            name,
            birth_date: birthDate,
            phone,
            email,
            password
        });

        fs.writeFileSync(
            path.join(__dirname, ".../../database/user.json"),
            JSON.stringify({ users: users}),
            "utf-8",
            (err) => {
                console.log(err);
            }
        )
    });
}

module.exports = create; 