//str.indexOf(searchTerm)
// version standalone

// Tengo dos valores, string y searchTerm. Hay que encontrar el segundo valor dentro del primero y que devuelva cuál es su index.
// Divido la string en partes para poder compararla con lo que quiero buscar de forma individual.
// Si encuentro una coincidencia, quiero que me diga en qué posición indexada se encuentra.

function indexOf(searchTerm) {
  // Casos especiales
  if (searchTerm === null) return -1;
  if (searchTerm === "") return 0;

  // Iterar sobre la cadena principal hasta el punto donde todavía puede haber una coincidencia
  for (let i = 0; i <= this.length - searchTerm.length; i++) {
    let match = true;
    // Iterar sobre la palabra que queremos buscar
    for (let j = 0; j < searchTerm.length; j++) {
      // Si la posición resultante de sumar i+j NO es igual al carácter de la posición J, no hay match.
      if (this.value[i + j] !== searchTerm[j]) {
        match = false;
        // Si NO hay match (match = FALSE), este break nos saca de este bucle. Si match es TRUE: seguirá dentro del bucle for(j) y buscará el siguiente carácter.
        break;
      }
    }
    if (match) return i; // Si match = true, devuélveme el valor de i. De lo contrario, volverá a empezar el bucle con un nuevo valor de i.
  }
  // Si no se encuentra el término de búsqueda, devolver -1
  return -1;
}

module.exports = indexOf;
