//str.includes(searchString)
//Version stand alone
function includes(string, searchString) {
  // tenemos 2 cadenas de caracteres y tenemos que mirar si la segunda cadena de caracteres
  // está incluida en la primer cadena de caracteres

  // "hola" te pregunto: "la" está incluida en la palabra "hola"
  // Coges la palabra que te han dado y buscas recorriendo si el primer caracter de la segunda palabra
  // coincide con alguno de las caracteres de la primera palabra. en caso de que si
  // buscas si el segundo caracter de la segunda palabra machea con el caracter consecutivo
  // al caracter encontrado en la primera palabra
  // si todo machea, entonces devuelvo que ha ido bien, si no digo que no ha ido bien

  if (searchString === null) return false;

  for (let i = 0, j = string.length - searchString.length + 1; i < j; i++) {
    let result = true;
    for (let k = 0; result && k < searchString.length; k++) {
      if (string[i + k] != searchString[k]) result = false;
    }
    if (result) return true
  }
  return false
}



const result5 = includes("world", "rld");
console.assert(result5 === "world".includes("rld"), {
  result: result5,
  message: "Test 5 No pasado ",
});

const result1 = includes("Hello", "H");
console.assert(result1 === "Hello".includes("H"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = includes("Hola", "Ho");
console.assert(result2 === "Hola".includes("Ho"), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = includes("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".includes(null), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = includes("world", "wr");
console.assert(result4 === "world".includes("wr"), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result6 = includes("world", "wod");
console.assert(result6 === "world".includes("wod"), {
  result: result6,
  message: "Test 6 No pasado ",
});

