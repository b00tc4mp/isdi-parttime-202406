const { users } = require("../scripts");
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

const template = [
  ["¿Cual es tu nombre?", 'name'],
  ["¿Cual es tu fecha de nacimiento?", 'birth_date'],
  ["¿Cual es tu telefono?", 'phone'],
  ["¿Cual es tu email?", 'email'],
  ["¿Cual es tu contraseña?", 'password']
];

let tupple = [...template];

const user = {};

function prompt(tupple) {
  rl.question(tupple[0][0], (answer) => {
    user[tupple[0][1]] = answer;
    tupple.shift();
    if (tupple.length > 0) prompt(tupple)
    else {
      users.createOne(user, (id) => {
        console.table({id});
        rl.question("¿Quieres agregar un nuevo usuario? (yes/no)", (answer) => {
          if (answer === 'yes') {
            tupple = [...template];
            prompt(tupple);
          } else {
            rl.close();
          }
        })
      });
    }
  })
}
prompt(tupple);