/* recibo dos strings y un separador del tipo string
tengo que crear una funcion que una los dos strings con el separador en el medio */

function concat(str1, str2, separador) {
  let concatString = str1 + separador + str2

  if (typeof separador === 'undefined') {
      concatString = str1 + str2
  }
  return concatString
}

const result1 = concat('hola', 'mundo', ', ')
console.assert(result1 === 'hola'.concat(', ','mundo'), {result: result1, message: "Test 1 No pasado "});
if (result1 === 'hola'.concat(', ','mundo')) console.log('Test 1 pasado');

const result2 = concat('hola', 'mundo', ' ')
console.assert(result2 === 'hola'.concat(' ','mundo'), {result: result2, message: "Test 2 No pasado "});
if (result2 === 'hola'.concat(' ','mundo')) console.log('Test 2 pasado');

const result3 = concat('hola', 'mundo')
console.assert(result3 === 'hola'.concat('mundo'), {result: result3, message: "Test 3 No pasado "});
if (result3 === 'hola'.concat('mundo')) console.log('Test 3 pasado');