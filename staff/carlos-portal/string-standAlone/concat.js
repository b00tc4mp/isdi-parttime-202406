


function concatenar(...args) {
    let cadena = ""; // Declarar la variable dentro de la función para reiniciarla en cada llamada
    for (let i = 0; i < args.length; i++) {
        cadena += args[i];
    }
    return cadena; // El return debe estar fuera del bucle
}





const result1 = concatenar("Ave", "Roma")
console.assert(result1 === "Ave".concat("Roma")),{
result:result1, message:"Test no pasado"}

const result2 = concatenar("Lo que tu quieras", "te lo sumo")
console.assert(result2 === "Lo que tu quieras".concat("te lo sumo")),{
result:result2, message:"Test no pasado"}

const result3 = concatenar("", "")
console.assert(result3 === "".concat("")),{
result:result3, message:"Test no pasado"}

