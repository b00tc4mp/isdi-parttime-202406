
- El objetivo es crear una base de datos relacional con Javascript y Node.js 
- Para ello utilizaremos 












---
#### CREATE


```js
const fs = require("fs");
const path = require("path");
const read = require("./read.js");

function create(data) {
  const { name, birthDate, phone, email, password } = data;
  read((users) => {
    const isEmailDuplicated = users.some((user) => user.email === email);
    if (isEmailDuplicated) throw new Error("User already exists");

    const id = users[users.length - 1].id + 1;
    users.push({
      id,
      name,
      birth_date: birthDate,
      phone,
      email,
      password,
    });

    fs.writeFile(
      path.join(__dirname, "../../database/users.json"),
      JSON.stringify({ users: users }),
      "utf-8",
      (err) => {
        console.log(err);
      }
    );
  });
}

module.exports = create;
```
##### Es una función que permite crear un nuevo usuario y almacenarlo en un archivo JSON, usa Node.js para manejar archivos y rutas

``` 
const fs = require("fs");
const path = require("path");
const read = require("./read.js");

```
`fs`:  Modulo de Node que permite interactuar con el sistema de archivos (leer, escribir ...)
`path` Módulo de Node que da herramientas para trabajar con rutas de archivos
`read` Se importa desde read.js para leer la lista de usuarios existentes

`function create(data) {
  `const { name, birthDate, phone, email, password } = data;`
- Función que usando los argumentos data crea un nuevo usuario

```
read((users) => {
const isEmailDuplicated = users.some((user) => user.email === email);
if (isEmailDuplicated) throw new Error("User already exists");

```
- Esperamos con read aplicar una 'lectura' sobre los usuarios y aplicar una callback sobre estos
en este caso creamos la función de detectar si algún email está duplicado con el método `.some`
si lo encuentra lanza un [[Error]].

```
const id = users[users.length - 1].id + 1;
users.push({
  id,
  name,
  birth_date: birthDate,
  phone,
  email,
  password,
});
```

- A continuación creamos un nuevo ID suponiendo que este será el ultimo, tomamos esta posición le sumamos una cada vez que añadamos un usuario lo procesamos y añadimos 


```js  
fs.writeFile(
  path.join(__dirname, "../../database/users.json"),
  JSON.stringify({ users: users }),
  "utf-8",
  (err) => {
    console.log(err);
  }
);

```
-  Se utiliza `fs.writeFile` para escribir el nuevo array `users` en un archivo JSON. Rercordamos que hemos 'invocado'  a fs antes justamente para este propósito.

- `path.join(__dirname, "../../database/users.json")` crea una ruta absoluta al archivo `users.json` que está dentro de una carpeta `database`.
- `JSON.stringify({ users: users })` convierte el array de usuarios en una cadena de texto en formato JSON.
- `"utf-8"` es la codificación del archivo.
- El último parámetro es un callback que maneja cualquier error (`err`) que pueda ocurrir durante la escritura del archivo. Si ocurre un error, se imprime en la consola.
