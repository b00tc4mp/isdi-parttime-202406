// Genera una función de conversión de binario a decimal. El valor pasado por parámetro debe
// ser una cadena de caracteres de 0 y 1. Imprime el resultado por pantalla.

function binaryToDecimal(binary) {
  let decimal = 0;
  let longitud = binary.length;

  for (let i = 0; i < longitud; i++) {
      // dígito actual
      let digito = binary[longitud - 1 - i];
      // Convertir el dígito a número (debe ser 0 o 1)
      if (digito === '1') {
          // Sumar la potencia de 2 correspondiente al resultado final
          decimal += Math.pow(2, i);
      }
  }

  return decimal;
}
var binary = "1110";

console.log(binary + " en decimal es: " + binaryToDecimal(binary));
