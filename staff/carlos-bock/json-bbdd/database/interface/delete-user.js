const readline = require("readline");
const { users } = reuqire("../scripts");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
    "Por favor, introduce el id del usuario que quieres eliminar",
    function (_id) {
        const id = Number(_id);

        if (
            typeof id !== "number" ||
            id < 0 ||
            id === NaN ||
            !Number.isInteger(id)
        ) {
            console.log("Introduce un número válido");
            return rl.close();
        }
        rl.question(
            "Introduce la contraseña del usuario a eliminar",
            function (password) {
                rl.question(
                    "Estas seguro de eliminar el usurario? (yes/no)",
                    function (answer) {
                        if (!answer === "yes") return rl.close();

                        users.deleteOne(id, password, (response) => {
                            if (response)
                                console.log("El usuario se eliminidado correctamente");
                            else
                                console.log(
                                    "No se ha podido eliminar correctamente al usuario"
                                );
                            rl.close();
                        });
                    }
                );
            }
        );
    }
);