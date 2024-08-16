//challenge endsWith
//Version stand alone
debugger
function endsWith(string, endString) {
  // tenemos 2 cadenas de caracteres y tenemos que mirar si la segunda cadena de caracteres
  // está incluida en la primer cadena de caracteres

  // "hola" te pregunto: "la" está incluida en la palabra "hola"
  // Coges la palabra que te han dado y buscas recorriendo si el primer caracter de la segunda palabra
  // coincide con alguno de las caracteres de la primera palabra. en caso de que si
  // buscas si el segundo caracter de la segunda palabra machea con el caracter consecutivo
  // al caracter encontrado en la primera palabra
  // si todo machea, entonces devuelvo que ha ido bien, si no digo que no ha ido bien
   
  if (endString === null) return false;

  let result = false;
  for (let i = 0; i < endString.length; i++){
  if (string[(string.length - endString.length) + i] === endString[i] ){    
      
      result = true } else {
      false
      break
      
      } 
  } 
    return result;
    
}

const result1 = endsWith("Hello", "o");
console.assert(result1 === "Hello".endsWith("o"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = endsWith("Hola", "la");
console.assert(result2 === "Hola".endsWith("la"), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = endsWith("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".endsWith(null), {
  result: result3,
  message: "Test 3 No pasado ",
});
const result4 = endsWith("world", "rd");
console.assert(result4 === "world".endsWith("rd"), {
  result: result4,
  message: "Test 4 No pasado ",
});
