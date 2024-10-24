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

// node stuff/js/process.js "Pepito" "2001-121-05" "+34 123456789" "pepito@gmail.com" "123456789"
