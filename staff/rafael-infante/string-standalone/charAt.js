//str.charAt(indice)
//Version stand alone
function charAt(string, index) {
  /* TODO:
   Tenemos una palabra de tipo 'string' y tenemos un indice del tipo 'number'
  la tarea es que el indice localice el caracter de ese indice y devolver el
  caracter de esa posicion
  */
 if (typeof index !== 'number') {
  return string[0]
  }
 if (index >= string.length) {
  return ''
 }
  return string[index]
}

const result1 = charAt("Hello", 2)
console.assert(result1 === "Hello".charAt(2), {result: result1, message: "Test 1 No pasado "})

const result2 = charAt("Hola", 2)
console.assert(result2 === "Hola".charAt(2), {result: result2, message: "Test 2 No pasado "})

const result3 = charAt("casoSinIndice", null)
console.assert(result3 === "casoSinIndice".charAt(null), {result: result3, message: "Test 3 No pasado "})

const result4 = charAt("casoSinIndice", '')
console.assert(result4 === "casoSinIndice".charAt(0), {result: result4, message: "Test 4 No pasado "})

const result5 = charAt("casoSinIndice", undefined)
console.assert(result5 === "casoSinIndice".charAt(0), {result: result5, message: "Test 5 No pasado "})

const result6 = charAt("casoFueraDeRango", 99)
console.assert(result6 === "casoFueraDeRango".charAt(99), {result: result6, message: "Test 6 No pasado "})