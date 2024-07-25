/* recibo dos parametros: un string y un numero. 
Debo crear una funcion que repita el string tantas veces como me lo indica el numero */

function repeat(str, number) {
  let newPhrase = '';

  for (let i = 0; i < number; i++){
      newPhrase += str
  }
  return newPhrase
}

const result1 = repeat('hola', 3)
console.assert(result1 === 'hola'.repeat(3), {result: result1, message: "Test 1 No pasado "});
if(result1 === 'hola'.repeat(3)) {
  console.log("Test 1 Pasado")
}

const result2 = repeat('hola', 0)
console.assert(result2 === 'hola'.repeat(0), {result: result2, message: "Test 2 No pasado "});
if(result2 === 'hola'.repeat(0)) {
  console.log("Test 2 Pasado")
}

const result3 = repeat('hola', 1)
console.assert(result3 === 'hola'.repeat(1), {result: result3, message: "Test 3 No pasado "});
if(result3 === 'hola'.repeat(1)) {
  console.log("Test 3 Pasado")
}

