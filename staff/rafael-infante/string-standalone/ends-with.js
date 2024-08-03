/* recibo un string y un patron, si ese string finaliza con ese patron
se devuelve true*/

function endsWith(string, pattern) {
  let result = true;
  if (pattern === null) return false;
  
  let j = pattern.length - 1;

  for (let i = string.length - 1; j >= 0; i--) {
      if (pattern[j] !== string[i]) {
          result = false;
          break;
      }
      j--;
  }
  return result
  }

const result1 = endsWith('holamundo', 'mundo')
console.assert(result1 === 'holamundo'.endsWith('mundo'), {result: result1, message: "Test 1 No pasado "});
if (result1) console.log('Test 1 pasado');

const result2 = endsWith('hola Rafa', 'Rafa')
console.assert(result2 === 'hola Rafa'.endsWith('Rafa'), {result: result2, message: "Test 2 No pasado "});
if (result2) console.log('Test 2 pasado');

const result3 = endsWith('holamundo', null)
console.assert(result3 === 'holamundo'.endsWith(null), {result: result3, message: "Test 3 No pasado "});
if (!result3) console.log('Test 3 pasado');






