
// Tengo una cadena de caracteres almacenada en string
// Tengo un index almacenado en index
// Tengo que devolver el caracter de la cadena que venga dado por index 
// Si index es >0, entonces se empieza contando desde la izq
// Si index es <0, entonces se empieza contando desde el final 

function at(string, index) {
    
    if(typeof index !== "number") {
        index = 0;
     }

    if(index < 0) {
        index = string.length + index;
        
        /*Para converter o índice negativo em um índice válido a partir do início da cadeia,
               somamos a extensão da cadeia (número de caracteres) ao índice negativo
               */   
    
    }
   

    return string[index]
}

const result1 = at("Hello",2)
console.assert(result1 === "Hello".at(2), {result: result1, message: "Test 1 No Pasado"})

const result2 = at("Hola", -3)
console.assert(result2 === "Hola".at(-3), {result: result2, message: "Test 2 No Pasado"})

const result3 = at("casoSinIndidce", null)
console.assert(result3 === "casoSinIndidce".at(null), {result: result3, message: "Test 3 No Pasado"})

