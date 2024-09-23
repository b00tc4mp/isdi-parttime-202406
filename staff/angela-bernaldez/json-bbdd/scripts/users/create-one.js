const fs = require("fs")
const path = require("path")
const read = require("./read-all.js")

function createOne(data) {
    // destructuring the object data to extract its properties
    // user don´t pass id property as they do not know that info
    const { name, birthDate, phone, email, password } = data;
    read((users) => {
        // check if there is already an user registered with that email
        const isEmailDuplicated = users.some((user) => user.email === email);
        // if there is an user registered with that email, throw an error when that email is trying to be used again
        if (isEmailDuplicated) throw new Error("User already exists");
    
        // if there is not an user registered with that email, add that to the database
        const id = users[users.length - 1].id + 1;
        users.push({
          id,
          name,
          birth_date: birthDate,
          phone,
          email,
          password,
        });
    
        fs.writeFile(
          path.join(__dirname, "../../database/users.json"),
          JSON.stringify({ users: users }),
          "utf-8",
          (err) => {
            if (err) throw err 
          }
        );
      });
}

module.exports = createOne