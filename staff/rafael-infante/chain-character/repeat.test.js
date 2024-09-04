const ChainCharacters = require(".");

const result1 = new ChainCharacters('hola').repeat(3)
console.assert(result1.value === 'hola'.repeat(3), {result: result1.value, message: "Test 1 No pasado "});
if(result1.value === 'hola'.repeat(3)) {
  console.log("Test 1 Pasado")
}

const result2 = new ChainCharacters('hola').repeat(0)
console.assert(result2.value === 'hola'.repeat(0), {result: result2.value, message: "Test 2 No pasado "});
if(result2.value === 'hola'.repeat(0)) {
  console.log("Test 2 Pasado")
}

const result3 = new ChainCharacters('hola').repeat(1)
console.assert(result3.value === 'hola'.repeat(1), {result: result3.value, message: "Test 3 No pasado "});
if(result3.value === 'hola'.repeat(1)) {
  console.log("Test 3 Pasado")
}