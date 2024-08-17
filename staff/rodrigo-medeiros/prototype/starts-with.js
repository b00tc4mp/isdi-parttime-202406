//challenge startsWith
//Version stand alone
function startsWith(startString, index) {
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
  if (this.value[index + i] !== startString[i] ){    

      result = false } else {
      true


      } 
  } 
    return result;

}
module.exports = startsWith