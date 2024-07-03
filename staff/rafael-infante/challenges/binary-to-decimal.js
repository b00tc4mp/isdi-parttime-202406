// Genera una función de conversion de binario a decimal, el valor pasado por parámetro 
// debe ser una cadena de caracteres de 0 y 1. Imprime el resultado por pantalla.

function binaryToDecimal(binaryNumber) {
  let decimalNumber = parseInt(binaryNumber, 2);
  return decimalNumber
}

let binario = '1111';
console.log(`El numero binario: ${binario}; en decimal es: ${binaryToDecimal(binario)}`)