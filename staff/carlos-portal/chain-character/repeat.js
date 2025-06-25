function repeat(times) {
    // Validar los argumentos
    if (typeof this.value !== "string" || typeof times !== "number" || times < 0) {
        return ""; // TDD
    }

    let resultado = ""; 
    let i = 0; // Inicializar contador
    while (i < times) {
        resultado += this.value; // Agregar la cadena original al resultado
        i++;
    }
    return resultado; // Devolver el resultado final
}

module.exports = repeat
