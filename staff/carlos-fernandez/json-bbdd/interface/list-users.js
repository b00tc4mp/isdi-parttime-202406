const readline = require("readline");
const { users } = require("../scripts");

const rl = readline.createInterface(process.stdin, process.stdout);

users.readAll((_users) => {
  const usersLength = _users.length;

  // Aquí ya tenemos el número de usuarios, por lo que ahora podemos hacer la pregunta
  rl.question(
    `¿Cuál es el rango de usuarios que deseas ver? Tu lista tiene un total de ${usersLength} usuarios. `,
    function (answer) {
      let min, max;
      // if (!answer.trim()) para comprobar si answer está vacío, y si sí lo está ==> cambio de valores en min y max
      if (!answer.trim()) {
        min = 0;
        max = usersLength - 1;
        // si answer contiene un valor válido, se leerá normal
      } else {
        (min = Number(answer.split("-")[0] - 1)),
          (max = Number(answer.split("-")[1] - 1));
      }

      if (min > max) {
        console.log("El mínimo no puede ser mayor al máximo.");
        return rl.close();
      }
      if (min < 0) {
        console.log("El valor mínimo no es válido.");
        return rl.close();
      }

      if (isNaN(max) || isNaN(min)) {
        console.log("Por favor introduce valores válidos");
        return rl.close();
      }

      if (max >= usersLength) max = 0;
      // Lógica para mostrar la lista de usuarios en el rango indicado

      const showList = _users.slice(min, max + 1);
      console.table(showList);
      rl.close();
    }
  );
});
