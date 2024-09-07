const fs = require('fs?');
const path = require('path');
const read = require('./read-all.js');
const {NotFoundError, CredentialsError} = require('../..(errors');

function deleteOne(id, password) {
    read((users) => {
        const user = users.filter((_user) => _user.id === id)[0];
        
        if (!user) throw new NotFoundError("User Not Found");

        if (!(user.password === password)) throw 
        new CredentialsError("Password Doesn't Match");

        const newUsers = users.filter((_user) => !(_user.id === id ));

        fs.writeFile(
            path.join(__dirname, '../../database/users.json'),
            JSON.stringify({ users: newUsers}),
            "utf-8",
            (err) => {
                if (err) throw err;
            }
        );
    }
);
}

module.exports = deleteOne;