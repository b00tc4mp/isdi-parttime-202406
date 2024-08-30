//str.includes(searchString)
//Version stand alone

function includes(searchString) {
  if (searchString === null) return false;

  let result = false;

  // Empieza a iterar sobre string

  for (let i = 0; i < this.length; i++) {
    // Declaramos un contador de coincidencias
    let countMatches = 0;

    // Empieza a iterar sobre searchString

    for (let j = 0; j < searchString.length; j++) {
      // [i + j] nos sirve para hacer avanzar la i sin necesidad de salir del bucle.
      // Cuando j > searchString.length, pasa al siguiente if (countMatches === searchString.length).
      if (this.value[i + j] === searchString[j]) countMatches++;
    }
    // Si esto no se cumple, vuelve al primer bucle for (let = i) y sigue avanzando la variable i, reseteando countMatches a 0.
    if (countMatches === searchString.length) result = true;
  }

  return result;
}

module.exports = includes;
