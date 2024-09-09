const readline = require("readline");
const { users } = require("../scripts");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Cuál es el rango que deseas ver? (ej: 5-8)", function (answer) {
  let min = Number(answer.split("-")[0]),
    max = Number(answer.split("-")[1]);

  if (min > max) {
    console.log("Él mínimo no puede ser mayor al máximo");
    return rl.close();
  }

  users.readAll((listUsers) => {
    const showList = listUsers.slice(min, max + 1);
    console.table(showList);
  });

  rl.close();
});
