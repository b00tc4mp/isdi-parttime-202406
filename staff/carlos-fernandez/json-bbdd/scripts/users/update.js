const fs = require("fs");
const read = require("./read.js");
const path = require("path");

function updateById(id, data) {
  // Variable objeto con las propiedades que pueden ser cambiadas y pasadas como argumento de la función updateById
  const { name, birthDate, phoneNumber } = data;

  //Leemos los users
  read((users) => {
    // Buscar si el ID de algún elemento (user) del array almacenado en users.json coincide con el ID pasado como parámetro de la función updateById.
    users.forEach((users) => {
      // Si el users.id coincide con el id parámetro
      if (users.id === id) {
        // Se reasignan las propiedades que no han sido definidas en el data con el valor que tenian por defecto antes de modificar nada.
        users.name = name ?? users.name;
        users.birth_date = birthDate ?? users.birth_date;
        users.phone_number = phoneNumber ?? users.phone_number;
      }
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

updateById(0, { phoneNumber: "+34 111111111" });

module.exports = updateById;
