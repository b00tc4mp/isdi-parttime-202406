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

const result1 = concatanate(string1, string2)
console.assert(result1 === string1.concat(string2), { result: result1, message: "Test 1 No pasado " })

const result2 = concatanate(string1, string2, string3)
console.assert(result2 === string1.concat(string2, string3), { result: result2, message: "Test 1 No pasado " })

const result3 = concatanate(string1, string3)
console.assert(result3 === string1.concat(string3), { result: result3, message: "Test 1 No pasado " })

const result4 = concatanate(string4, string5)
console.assert(result4 === string4.concat(string5), { result: result4, message: "Test 1 No pasado " })

const result5 = concatanate(string1, null)
console.assert(result5 === string1.concat(null), { result: result5, message: "Test 1 No pasado " })

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
