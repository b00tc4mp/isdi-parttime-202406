function trim() {
  let start = 0;
  let end = this.length - 1;

  // Encontrar el primer carácter no blanco al principio de la cadena
  while (start <= end && this.value[start] === " ") {
    start++;
  }

  // Encontrar el último carácter no blanco al final de la cadena
  while (end >= start && this.value[end] === " ") {
    end--;
  }

  // Si la cadena está vacía o solo contenía espacios en blanco
  if (start > end) {
    return "";
  }

  // Crear una nueva cadena que va del carácter en `inicio` hasta el carácter en `fin`
  let result = "";
  for (let i = start; i <= end; i++) {
    result += this.value[i];
  }

  return result;
}

module.exports = trim;
// Ejemplo de uso
