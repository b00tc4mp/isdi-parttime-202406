const readline = require("readline");
const { users } = require("../scripts");

const rl = readline.createInterface(process.stdin, process.stdout);

const template = [
  ["Cuál es tu nuevo nombre?", "name"],
  ["Cuál es tu nueva fecha de nacimiento?", "birthDate"],
  ["Cuál es tu nuevo teléfono?", "phone"],
];
let tupple = [...template];

const user = {}; // usuario relleno

function prompt(tupple, id) {
  rl.question(tupple[0][0], function (answer) {
    user[tupple[0][1]] = answer === "" ? null : answer;
    tupple.shift();
    if (tupple.length > 0) prompt(tupple, id);
    else {
      users.updateById(id, user);
      rl.close();
    }
  });
}

rl.question("Qué usuario quieres editar?", (id) => {
  debugger;
  prompt(tupple, Number(id));
});
