//challenge startsWith
//Version stand alone
debugger
function startsWith(string, startString, index) {
  // tenemos 2 cadenas de caracteres y tenemos que mirar si la segunda cadena de caracteres
  // empieza la primer cadena de caracteres

  // "hola" te pregunto: "ho" empieza la palabra "hola"
  // Coges la palabra que te han dado y buscas recorriendo si el primer caracter de la segunda palabra
  // coincide con el primer caracter de la primera palabra. en caso de que si
  // buscas si el segundo caracter de la segunda palabra machea con el segundo caracter encontrado en la primera palabra
  // si todo machea, entonces devuelvo que ha ido bien, si no digo que no ha ido bien.
   
  if (startString === null) return false;

  let result = true;
  for (let i = 0; i < startString.length; i++){
  if (string[index + i] !== startString[i] ){    
      
      result = false } else {
      true
      
      
      } 
  } 
    return result;
    
}

const result1 = startsWith("Hello", "H", 0);
console.assert(result1 === "Hello".startsWith("H"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = startsWith("Hola", "Ho", 0);
console.assert(result2 === "Hola".endsWith("la"), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = startsWith("casoSinIndice", null, 0);
console.assert(result3 === "casoSinIndice".startsWith(null), {
  result: result3,
  message: "Test 3 No pasado ",
});
const result4 = startsWith("world", "wr", 0);
console.assert(result4 === "world".startsWith("wr"), {
  result: result4,
  message: "Test 4 No pasado ",
});