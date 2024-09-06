const readline = require("readline");
const { users } = require("../scripts");

const rl = readline.createInterface(process.stdin, process.stdout);

function deleteUser(id) {
  read((users) => {
    const user = users.filter((_user) => _user.id === id)[0];
    if (!user) throw new NotFoundError("User not found");

    if (!(user.password === password))
      throw new CredentialsError("Password doesn't match");

    const newUsers = users.filter((_user) => !(_user.id === id));

    fs.writeFile(
      path.join(__dirname, "../../database/users.json"),
      JSON.stringify({ users: newUsers }),
      "utf-8",
      (err) => {
        if (err) throw err;
      }
    );
  });
}

rl.question(
  "Por favor, introduce el id del usuario que quieres eliminar: ",
  function (id) {
    // Si id no es un número lanza error
    if (isNaN(id)) throw new TypeError("Id is not a number");
    deleteUser(id);
    rl.close();
  }
);
