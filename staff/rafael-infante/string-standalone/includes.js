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

  let result = false;

  for (let i = 0; i < string.length; i++) {
    
    let count = 0
    for (let j = 0; j < searchString.length; j++){
      const characterOfString = string[i];
      const characterOfSearchString = searchString[j]
      
      if (characterOfString === characterOfSearchString){
        count++
        if (count === searchString.length) return true;
        i++
      } else {
        count = 0;
        result = false
      }
    }
  }

  return result;
}

const result1 = includes("Hello", "H");
console.assert(result1 === "Hello".includes("H"), {result: result1, message: "Test 1 No pasado "});
if (result1) console.log('Test 1 pasado');

const result2 = includes("Hola", "Ho");
console.assert(result2 === "Hola".includes("Ho"), {result: result2, message: "Test 2 No pasado "});
if (result2) console.log('Test 2 pasado');

const result3 = includes("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".includes(null), {result: result3, message: "Test 3 No pasado "});
if (!result3) console.log('Test 3 pasado');

const result4 = includes("world", "wr");
console.assert(result4 === "world".includes("wr"), {result: result4, message: "Test 4 No pasado "});
if (!result4) console.log('Test 4 pasado');