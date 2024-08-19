// me da una lista de caracteres con espacios en blanco, borra los espacios en blaco y devuelve la palabra sin estos 
// creo dos strings una llamada  vacía que sera el concepto a hacer match, un espacio vacio
// y una llamada llena que sera el concepto a llenar de caracteres unicamente sin espacios en blanco 
// cada vez que la cadena sea igual  a vacia avanza posicion, cuando no, se duplica en llena
// devuelve llena 

function trim(string) {
    let start = 0;
    let end = string.length - 1;
    let llena = "";
    while (start < string.length && string[start] === " ") {
        start++;
    }
    while (end >= 0 && string[end] === " ") {
        end--;
    }
    for (let i = start; i <= end; i++) {
        llena += string[i];
    }

    return llena;
}


// Caso 1: Cadena con espacios al inicio y al final
const result1 = trim("  hello world  ");
console.assert(result1 === "hello world", { result: result1, message: "Test 1 no pasado" });

// Caso 2: Cadena con espacios solo al inicio
const result2 = trim("  JavaScript");
console.assert(result2 === "JavaScript", { result: result2, message: "Test 2 no pasado" });

// Caso 3: Cadena con espacios solo al final
const result3 = trim("OpenAI  ");
console.assert(result3 === "OpenAI", { result: result3, message: "Test 3 no pasado" });

// Caso 4: Cadena vacía
const result4 = trim("");
console.assert(result4 === "", { result: result4, message: "Test 4 no pasado" });
