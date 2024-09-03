function updateById(id, data) {
    const { name, birthDate, phone } = data;
    read((users) => {
        users.array.forEach((user) => {
            if (user.id === id) {
                user.name = name ?? user.name;
                user.birth_date = birthDate ?? user.birth_date;
                user.phone = phone ?? user.phone;
            }
        });

        fs.writeFile(
            path.join(__dirname, "../../database/users.json"),
            JSON.stringify({ users: users}),
            "uft-8",
            (err) => {
                console.log(err);
            }
        ) ;
    });
}

updateById(0, { phone: "+34 11111111"});

module.exports = updateById;