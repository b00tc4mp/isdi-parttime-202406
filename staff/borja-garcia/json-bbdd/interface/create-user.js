const readline = require("readline");
const { users } = require("../scripts");

const r1 = readline.createInterface(process.stdin, process.stdout);

const template = [
  ["¿Cuál es tu nombre?", "name"],
  ["¿Cuál es tu fecha de nacimiento?", "birthDate"],
  ["¿Cuál es tu teléfono?", "phone"],
  ["¿Cuál es tu email?", "email"],
  ["¿Cuál es tu contraseña?", "password"],
];
let tupple = [...template];

const user = {};

function prompt(tupple) {
  r1.question(tupple[0][0], function (answer) {
    user[tupple[0][1]] = answer;
    tupple.shift();
    if (tupple.length > 0) {
      prompt(tupple);
    } else {
      users.createOne(user, (err, id) => {
        if (err) {
          console.error("Error al crear el usuario:", err.message);
        } else {
          console.table({ id });
          r1.question("¿Quieres agregar un nuevo usuario? (yes/no)", function (answer) {
            if (answer === "yes") {
              tupple = [...template];
              prompt(tupple);
            } else {
              r1.close();
            }
          });
        }
      });
    }
  });
}

prompt(tupple);
