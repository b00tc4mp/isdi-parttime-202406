function saludar(saludo, signo) {
  console.log(`${saludo}, ${this.nombre}${signo}`);
}

const persona = { nombre: "Juan" };

saludar.apply(persona, ["Hola", "!"]); // Output: "Hola, Juan!"

const persona2 = { nombre: "Limon" };

saludar.apply(persona2, ["Heeeeey", "😎"]);
