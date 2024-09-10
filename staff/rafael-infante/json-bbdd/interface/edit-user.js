const { users } = require("../scripts");
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

const template = [
  ["¿Nuevo nombre?", 'name'],
  ["¿Nueva fecha de nacimiento?", 'birth_date'],
  ["¿Nuevo telefono?", 'phone']
];

let tupple = [...template];

const user = {};

function prompt(tupple, id) {
  rl.question(tupple[0][0], (answer) => {
    user[tupple[0][1]] = answer === "" ? null : answer;
    tupple.shift();
    if (tupple.length > 0) prompt(tupple, id)
    else {
      users.updateById(id, user);
      rl.close();
    }
  });
}

rl.question('¿Que usuario quieres editar?', (id) => {
  prompt(tupple, Number(id))
})