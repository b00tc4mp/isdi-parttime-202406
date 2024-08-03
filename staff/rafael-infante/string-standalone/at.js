//str.at(indice)
//Version stand alone
function at(string, index) {
  // Separo cada uno de mis carácteres y les pongo un numero en orden de izquierda a derecha
  // Separo cada uno de mis carácteres y les pongo un número en orden en negativo de derecha a izquierda
  // Con el valor que me pasan por index, macheo el index con el numero que le he puesto a cada uno
  // de mis carácteeres y devulevo el caracter matcheado

  if (index === null) return string[0]

  let result;

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    let characterNegative = string[string.length + index]

    if (index === i) {
      result = character
      
    } else if (index < 0) {
      result = characterNegative
    }
  }

  return result;
}

const result1 = at("Hello", 2);
console.assert(result1 === "Hello".at(2), { result: result1, message: "Test 1 No pasado "});
if (result1 === "Hello".at(2)) console.log('Test 1 pasado');

const result2 = at("Hola", -1);
console.assert(result2 === "Hola".at(-1), {result: result2, message: "Test 2 No pasado "});
if (result2 === "Hola".at(-1)) console.log('Test 2 pasado');

const result3 = at("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".at(null), {result: result3, message: "Test 3 No pasado "});
if (result3 === "casoSinIndice".at(null)) console.log('Test 3 pasado');

const result4 = at("Hola", -2);
console.assert(result4 === "Hola".at(-2), {result: result4, message: "Test 4 No pasado "});
if (result4 === "Hola".at(-2)) console.log('Test 4 pasado');
