// Genera una función de conversión de binario a decimal. El valor pasado por parámetro debe
// ser una cadena de caracteres de 0 y 1. Imprime el resultado por pantalla

function binaryToDecimal(binary) {
    var decimal = 0;
    for (let i=binary.length - 1; i>=0; i--) {
        // going from last position to first position
        decimal += binary[binary.length-1-i]*2**(i)
    }
    return decimal;
  }
  
  var binary = "100";
  
  console.log(binary + " en decimal es: " + binaryToDecimal(binary));
