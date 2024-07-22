//method concatanates multiple strings into one 
//method can pass multiple strings. 

//concatenar strings que se pasan a la función a un nuevo string. 
//Estructurar función de una manera flexible que acepte muchos valores.
// Usar un loops para passar todos los valores. 
// convertir numero en string
// si el valor el null el resultado es string de null

new function concatanate() {

}






//TDD

let string1 = "Hello ";
let string2 = "world.";
let string3 = "Extra sentence after the hello world phrase."
let string4 = 3
let string5 = 4

const result1 = charAt("Hello", 2)
console.assert(result1 === "Hello".charAt(2), { result: result1, message: "Test 1 No pasado " })


// codigo ejemplar
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
