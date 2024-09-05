const { users } = require("../scripts");

const user = {
  name: null,
  birthDate: null,
  phone: null,
  email: null,
  password: null,
};

let i = 2;
for (const property in user) {
  user[property] = process.argv[i];
  i++;
}

console.log(user);

// node staff/ventura-rodriguez/json-bbdd/interface/create-user.js "Pepito" "2001-121-05" "+34 123456789" "pepito@gmail.com" "123456789"
// node --inspect-brk staff/ventura-rodriguez/json-bbdd/interface/create-user.js "Pepito" "2001-121-05" "+34 123456789" "pepito@gmail.com" "123456789"

// users.createOne({
//   name: "Pepito",
//   birthDate: "2001-12-05",
//   phone: "+34 123456789",
//   email: "pepito@gmail.com",
//   password: "12345678",
// });
