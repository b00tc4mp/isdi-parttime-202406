function saludar(saludo, signo) {
    console.log(`${saludo}, ${this.nombre}${signo}`);
}

const persona = {nombre: "Juan"};

const saludo = saludar.bind(persona, "Hola", "!");

saludo();

const persona2 = { nombre: "Limon" };

const saludo2 = saludar.bind(persona2, "Heeey", " :) ");

saludo2();