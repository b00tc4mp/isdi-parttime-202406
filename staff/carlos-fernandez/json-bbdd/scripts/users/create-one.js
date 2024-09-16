const fs = require("fs");
const path = require("path");
const readAll = require("./read-all.js");
const { EmailNotValidError } = require("../../errors");

async function createOne(data, callback) {
  // Copia de los parámetros originales para no trabajar sobre el mismo origen.
  const { name, birthDate, phone, email, password } = data;
  const emailRegexp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  // !validEmail.test(email) => en negativo porque tiene que ser TRUE para que entre a la condición y lance el error
  if (!emailRegexp.test(email))
    throw new EmailNotValidError("Email is not valid");
  readAll((users) => {
    // Método que evalúa si el email de algún elemento del array (en este caso algún user) coincide con el nuevo email.
    const isEmailDuplicated = users.some((user) => user.email === email);

    //Si el email ya existía con anterioridad, va a lanzar un error.
    if (isEmailDuplicated) throw new Error("Email already in use");

    // Configuramos un nuevo id para cada nuevo user. Accedemos al ID del último user y le sumamos uno más.
    const id = users[users.length - 1].id + 1;
    users.push({
      id,
      name,
      birth_date: birthDate,
      phone,
      email,
      password,
    });

    //creamos los nuevos ususarios con fs.readFile( )
    fs.writeFile(
      path.join(__dirname, "../../database/users.json"),
      // lo pasamos a formato string mediante JSON.stringify
      JSON.stringify({ users: users }),
      "utf-8",
      (err) => {
        if (err) throw err;

        callback(id);
      }
    );
  });
}

module.exports = createOne;
