const readline = require("readline");
const { users } = require("../scripts");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  "Por favor, introduce el id del usuario que quieres consultar. ",
  function (_id) {
    const id = Number(_id);
    // Si id no es un número lanza error
    if (
      typeof id !== "number" ||
      id < 0 ||
      id === NaN ||
      id === Infinity ||
      !Number.isInteger(id)
    ) {
      console.log("Introduce un número válido.");
      return rl.close();
    }
    users.readOne(id, (user) => console.table(user));
    rl.close();
  }
);
