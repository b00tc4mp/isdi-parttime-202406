// string.trimStart()
// Version standalone

function trimStart() {
  let string = String(this.value);
  let newInput = "";
  let startTrimming = false;

  for (let i = 0; i < string.length; i++) {
    if (!startTrimming && string[i] !== " ") {
      startTrimming = true;
    }

    if (startTrimming) {
      newInput += string[i];
    }
  }

  return newInput;
}

module.exports = trimStart;

// Este método elimina los espacios que haya al inicio de la string.

/* Hay que saber en qué posición se encuentra la primera letra del string y hacer una nueva 
string con el contenido que aparece a partir de esa posición.*/

// EXPLICACIÓN DEL CÓDIGO

// Hacemos que cualquier input se convierta en string.

// Encuentra el primer carácter que no sea un espacio.

/* Si startTrimming es lo contrario al ya declarado (si se inicializa en false, lo pasamos a true) y 
        ADEMÁS el indexado de string NO es un carácter VACÍO: startTrimming será true. */

/*El primer if no se cumplirá, porque string[i] sí es un carácter vacío. Por lo tanto volverà al inicio y el loop
        dará otra vuelta. Siendo startTrimming = false aún. */

/* Que startTrimming sea true, significa que el carácter encontrado es una letra o un número, por lo tanto lo podemos
        añadir a la newString*/
// Una vez que empiezas a recortar, añade todos los caracteres a la nueva cadena
