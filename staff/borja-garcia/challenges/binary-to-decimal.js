// Genera una función de conversión de binario a decimal. El valor pasado por parámetro debe
// ser una cadena de caracteres de 0 y 1. Imprime el resultado por pantalla.

function binaryToDecimal(binary) {
    
    var decimal = 0;
   
    for (let i = 0; i < binary.length; i++) {
        
        let binNum = binary[binary.length - 1 - i];
        decimal += binNum * Math.pow(2, i);
    }
    
    return decimal;
    
}

var binary = "011001010001";
console.log(binary + " en decimal es: " + binaryToDecimal(binary));