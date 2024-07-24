/* recibo un string y un separador (que es un patron). Debo buscar el patron en la cadena de entrada
si encuentro el patron lo elimino y divido la cadena en un array dependiendo de lo que tenga antes
y despues del patron */

function split(string, pattern) {
  let result = ['hello', 'world']
  
  return result
}

console.log(split('The quick brown', ' '))

function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let result = true;
  let i = 0;
  while (i < arr1.length || result === false) {
      if (arr1[i] !== arr2[i]) {
          result = false
      }
      i++
  }
  return result
}


const result1 = split('hello world', ' ')
console.assert(arrayIsEqual(result1, ['hello', 'world']), {result: result1, message: "Test 1 No pasado "})

const result2 = split('hello,cruel,world', ',')
console.assert(arrayIsEqual(result2, ['hello', 'cruel', 'world']), {result: result2, message: "Test 2 No pasado "})

const result3 = split('hello-cruel-world', '-')
console.assert(arrayIsEqual(result3, ['hello', 'cruel', 'world']), {result: result3, message: "Test 3 No pasado "})



