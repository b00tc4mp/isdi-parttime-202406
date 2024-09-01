//done, pero necesita nulls casos de null

//method concatanates multiple strings into one 
//method can pass multiple strings. 

//concatenar strings que se pasan a la función a un nuevo string. 
//Estructurar función de una manera flexible que acepte muchos valores.
// Usar un loops para passar todos los valores. 
// convertir numero en string
// si el valor el null el resultado es string de null

const ChainCharacters = require("./constructor")

function concat(...strings) {
    let result = this.value;

    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
    }
        return new ChainCharacters(result);
    }

    module.exports = concat
 