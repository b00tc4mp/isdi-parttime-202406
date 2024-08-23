function startsWith(wordStart) {
  // Convertir this.value y wordStart a cadenas
  const stringValue = this.value.toString();
  wordStart = wordStart.toString();

  // Si la palabra de inicio es más larga que el valor, no puede ser verdadero
  if (wordStart.length > stringValue.length) {
    return false;
  }

  // Comparar la parte inicial de stringValue con wordStart
  for (let i = 0; i < wordStart.length; i++) {
    if (stringValue[i] !== wordStart[i]) {
      return false;
    }
  }

  // Si coincide, devolver true
  return true;
}

module.exports = startsWith;
