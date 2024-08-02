// Genera una función de conversión de binario a decimal. El valor pasado por parámetro debe
// ser una cadena de caracteres de 0 y 1. Imprime el resultado por pantalla.

function binaryToDecimal(binary) {
  var decimal = 0;
  var length = binary.length;

  for (var i = 0; i < length; i++) {
    var value = binary[length - 1 - i];

    if (value === "1") {
      decimal += Math.pow(2, i);
    }
  }

  return decimal;
}

var binary = "10010010"; // 128 64 32 16 8 4 2 1

console.log(binary + " en decimal es: " + binaryToDecimal(binary));
