const readline = require("readline");
const { users } = require("../scripts");

const rl = readline.createInterface(process.stdin, process.stdout);

const template = [
  ["Cuál es tu nombre? ", "name"],
  ["Cuál es tu fecha de nacimiento? ", "birthDate"],
  ["Cuál es tu teléfono? ", "phoneNumber"],
];

let tupple = [...template];

const user = {};

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

rl.question(
  "Por favor, introduce el id del usuario que quieres editar ",
  function (id) {
    // Si id no es un número lanza error
    if (isNaN(id)) throw new TypeError("Id is not a number");
    prompt(tupple, Number(id));
  }
);
