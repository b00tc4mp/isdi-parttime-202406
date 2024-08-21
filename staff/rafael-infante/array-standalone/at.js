// recibe un valor entero positivo o negativo y un array 
// y devuelve el elemento que esta contenido en ese indice

function at(array, index) {
  if (index < 0) {
    index = array.length + index;
  }
  if (index === undefined || index === null) {
    index = 0;
  }
  return array[index]
}

// TEST 1
const result1 = at([5, 6, 8, 1, 3])
console.assert(result1 === [5, 6, 8, 1, 3].at(), {result: result1, message: 'Test 1 no pasado'})
if (result1 === [5, 6, 8, 1, 3].at()) console.log('Test 1 pasado');

// TEST 2
const result2 = at([5, 6, 8, 1, 3], null)
console.assert(result2 === [5, 6, 8, 1, 3].at(null), {result: result2, message: 'Test 2 no pasado'})
if (result2 === [5, 6, 8, 1, 3].at(null)) console.log('Test 2 pasado');

// TEST 3
const result3 = at([5, 6, 8, 1, 3], -1)
console.assert(result3 === [5, 6, 8, 1, 3].at(-1), {result: result3, message: 'Test 3 no pasado'})
if (result3 === [5, 6, 8, 1, 3].at(-1)) console.log('Test 3 pasado');

// TEST 4
const result4 = at([5, 6, 8, 1, 3], 1)
console.assert(result4 === [5, 6, 8, 1, 3].at(1), {result: result4, message: 'Test 4 no pasado'})
if (result4 === [5, 6, 8, 1, 3].at(1)) console.log('Test 4 pasado');
