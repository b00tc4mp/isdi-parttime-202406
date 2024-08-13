function saludar(saludo, signo) {
  console.log(`${saludo}, ${this.nombre}${signo}`);
}

const persona = { nombre: "Juan" };

saludar.call(persona, "Hola", "!"); // Output: "Hola, Juan!"

const persona2 = { nombre: "Limon" };

saludar.call(persona2, "Heeeeey", "😎");
