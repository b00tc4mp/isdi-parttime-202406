/* recibo un string y un separador (que es un patron). Debo buscar el patron en la cadena de entrada
si encuentro el patron lo elimino y divido la cadena en un array dependiendo de lo que tenga antes
y despues del patron */

function split(string, pattern) {
  let newArray = [];
  let elementOfArray = '';

  for (let i = 0; i < string.length; i++) {
  
    if (pattern === '') {
      newArray[i] = string[i]; // separo por caracteres

    } else if (string[i] === pattern) {
      newArray[newArray.length] = elementOfArray;
      elementOfArray = '';

    } else {
      elementOfArray += string[i];
    }
    
  }
  return newArray
}

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


const result1 = split('hello world', '')
console.assert(arrayIsEqual(result1, ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']), {result: result1, message: "Test 1 No pasado "})
if(arrayIsEqual(result1, ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'])) {
  console.log("Test 1 Pasado")
}

const result2 = split('hello,world,', ',')
console.assert(arrayIsEqual(result2, ['hello', 'world']), {result: result2, message: "Test 2 No pasado "})
if(arrayIsEqual(result2, ['hello', 'world'])) {
  console.log("Test 2 Pasado")
}

const result3 = split('hello-world-', '-')
console.assert(arrayIsEqual(result3, ['hello', 'world']), {result: result3, message: "Test 3 No pasado "})
if (arrayIsEqual(result3, ['hello', 'world'])) {
  console.log("Test 3 pasado")
}



