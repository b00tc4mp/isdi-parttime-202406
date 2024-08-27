//string.prototype.includes(searchString)
function includes(searchString) {
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

  for (let i = 0; i < this.length; i++) {
    
    let count = 0
    for (let j = 0; j < searchString.length; j++){
      const characterOfString = this.value[i];
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

module.exports = includes;