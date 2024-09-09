const readline = require("readline");
const { users } = require("../scripts");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  "Por favor, introduce el id del usuario que quieres eliminar",
  function (_id) {
    const id = Number(_id);

    if (
      typeof id !== "number" ||
      id < 0 ||
      id === NaN ||
      id === Infinity ||
      !Number.isInteger(id)
    ) {
      console.log("Introduce un número válido");
      return rl.close();
    }
    rl.question(
      "Introduce la contraseña del usuario a eliminar",
      function (password) {
        rl.question(
          "Estás seguro de eliminar el usuario? (yes/no)",
          function (answer) {
            if (!answer === "yes") return rl.close();

            users.deleteOne(id, password, (response) => {
              if (response)
                console.log("El usuario se ha eliminado correctamente");
              else
                console.log(
                  "No se ha podido eliminar correctamente el usuario"
                );
              rl.close();
            });
          }
        );
      }
    );
  }
);
