function toUpperCase() {
  // Definir las letras mayúsculas y minúsculas manualmente
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";

  // Inicializar una nueva cadena vacía para almacenar el resultado
  let newStr = "";

  // Recorrer cada carácter de la cadena de entrada
  for (let i = 0; i < this.length; i++) {
    let found = false;

    // Buscar la correspondencia de la letra mayúscula en el alfabeto definido
    for (let j = 0; j < upperCase.length; j++) {
      if (this.value[i] === lowerCase[j]) {
        newStr += upperCase[j];
        found = true;
        break;
      }
    }

    // Si no es una letra mayúscula, agregar el carácter tal cual

    if (!found) {
      newStr += this.value[i];
    }
  }

  // Devolver la nueva cadena con todas las mayúsculas convertidas a minúsculas
  return newStr;
}

module.exports = toUpperCase;
