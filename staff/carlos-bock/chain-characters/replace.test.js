

const ChainCharacters = require("./");

const aString = "My favorite color is blue";
const oldWord = "blue";
const newWord = "red";

const stringB = "Cual es el mejor bootcamp";
const pregunta = "Cual";
const respuesta = "ISDI";

const result1 = new ChainCharacters(aString).replace(oldWord, newWord);
console.assert(result1.value === aString.replace(oldWord, newWord),{
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters(stringB).replace(pregunta, respuesta);
console.assert(result2.value === stringB.replace(pregunta, respuesta),{
  result: result2,
  message: "Test 1 No pasado ",
});