
function at(string, index) {

    // Tengo una cadena de caracteres almacenada en string
    // Tengo un index almacenado en index
    // Tengo que devolver el caracter de la cadena que venga dado por index 
    // Si index es >0, entonces se empieza contando desde la izq
    // Si index es <0, entonces se empieza contando desde el final 
    var value = 0 
    for (let i = 0; i < string.length; i++) {
        var result = string[i]

        if (i === index) {
            value = result
        }
        else if (index < 0 && i === string.length + index) {
            value = result
        }
        else if (index === null) {
            value = string[0]
        }
    }
    return value 
}

const result1 = at("Hello",2)
console.assert(result1 === "Hello".at(2), {result: result1, message: "Test 1 No Pasado"})
debugger
const result2 = at("Hola", -1)
console.assert(result2 === "Hola".at(-1), {result: result2, message: "Test 2 No Pasado"})

const result3 = at("casoSinIndidce", null)
console.assert(result3 === "casoSinIndidce".at(null), {result: result3, message: "Test 3 No Pasado"})
