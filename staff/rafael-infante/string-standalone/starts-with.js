/* recibo un string y un patron, si ese string inicia con ese patron
se devuelve true*/

function startsWith(string, pattern) {
  let result = true;
  if (pattern === null) return false;
  
  let j = 0;

  for (let i = 0; j < pattern.length; i++) {
      if (pattern[j] !== string[i]) {
          result = false;
          break;
      }
      j++;
  }
  return result
  }

const result1 = startsWith('holamundo', 'hola')
console.assert(result1 === 'holamundo'.startsWith('hola'), {result: result1, message: "Test 1 No pasado "});
if (result1){
  console.log('Test 1 pasado')
}

const result2 = startsWith('holamundo', 'holi')
console.assert(result2 === 'holamundo'.startsWith('holi'), {result: result2, message: "Test 2 No pasado "});
if (!result2){
  console.log('Test 2 pasado')
}

const result3 = startsWith('holamundo', null)
console.assert(result3 === 'holamundo'.startsWith(null), {result: result3, message: "Test 3 No pasado "});
if (!result3){
  console.log('Test 3 pasado')
}






