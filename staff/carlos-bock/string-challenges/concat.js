//done, pero necesita nulls casos de null

//method concatanates multiple strings into one 
//method can pass multiple strings. 

//concatenar strings que se pasan a la función a un nuevo string. 
//Estructurar función de una manera flexible que acepte muchos valores.
// Usar un loops para passar todos los valores. 
// convertir numero en string
// si el valor el null el resultado es string de null

function concat(...strings) {
    let newString = "";

    let str = ''
    for (let i = 0; i < strings.length; i++) {
        str += strings[i];
    }
        return str;
    }
 
const string1 = "This ";
const string2 = "function ";
const string3 = "works.";
const string4 = "1";
const string5 = "2";
const string6 = "3";



const result1 = concat(string1,string2,string3);
console.assert(result1 === string1.concat(string2,string3),{
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = concat(string4,string5,string6);
console.assert(result2 === string4.concat(string5,string6),{
  result: result2,
  message: "Test 1 No pasado ",
});