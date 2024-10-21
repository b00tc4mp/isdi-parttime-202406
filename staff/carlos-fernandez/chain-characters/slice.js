// str.slice(start, end)
// Version standAlone

/* Este método devuelve una nueva string o array, con la parte que nosotros queramos. Empieza a iterar en el primer parámetro
y acaba en el segundo parámetro. */

/* Crear una variable vacía donde iremos introduciendo los carácteres que se encuentren en la posición indexada que marca el
segundo parámetro hasta el final. */

/* En caso de que no hubiera segundo parámetro, se iteraría hasta str.length. */

/* Crear una variable vacía (newString) donde iremos introduciendo los carácteres que se encuentren en la posición indexada que marca START hasta el
index que nos marca END. */

/*  1) En caso de que no hubiera segundo parámetro, se iteraría hasta str.length. 
    2) En caso que end < 0, el final sería INPUT.LENGTH + END;
    3) En caso que end > INPUT.LENGTH, end sería igual a INPUT.LENGTH;
    4) En caso que end = undefined, end sería igual a INPUT.LENGTH;
    */
const ChainCharacters = require("./constructor");

function slice(start, end) {
  // Determinar el tipo de input para iniciar la variable newString en función de si es string o array.
  let isArray = Array.isArray(this.value);
  let newString = isArray ? [] : "";

  // Determinar valores por defecto y negativos para end
  if (end === undefined || end > this.length) {
    end = this.length;
  }
  if (end < 0) {
    end = this.length + end;
  }

  // Recorrer el input desde start hasta end
  for (let i = start; i < end; i++) {
    if (isArray) {
      newString[newString.length] = this.value[i];
    } else {
      newString += this.value[i];
    }
  }
  return new ChainCharacters(newString);
}
module.exports = slice;
