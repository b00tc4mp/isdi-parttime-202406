const fs = require("fs");
const read = require("./read.js");
const path = require("path");

function create(data) {
  // Copia de los parámetros originales para no trabajar sobre el mismo origen.
  const { name, birthDate, phoneNumber, email, password } = data;

  read((users) => {
    // Método que evalúa si el email de algún elemento del array (en este caso algún user) coincide con el nuevo email.
    const isEmailDuplicated = users.some((users) => users.email === email);

    //Si el email ya existía con anterioridad, va a lanzar un error.
    if (isEmailDuplicated) throw new Error("User already exist.");

    // Configuramos un nuevo id para cada nuevo user. Accedemos al ID del último user y le sumamos uno más.
    const id = users[users.length - 1].id + 1;

    users.push({
      id,
      name,
      birt_date: birthDate,
      phone_number: phoneNumber,
      email,
      password,
    });

    //creamos los nuevos ususarios con fs.readFile( )
    fs.writeFile(
      path.join(__dirname, "../../bbdd/users.json"),
      // fs.writeFile espera formato string, por eso transformamos a formato string mediante JSON.stringify
      JSON.stringify({ users: users }),
      "utf-8",
      (err) => {
        console.log(err);
      }
    );
  });
}

create({
  name: "Rafinha",
  birthDate: "1999-09-02",
  phoneNumber: "334445556",
  email: "imrafinha@gmail.com",
  password: "viniziusucks",
});

module.exports = create;
