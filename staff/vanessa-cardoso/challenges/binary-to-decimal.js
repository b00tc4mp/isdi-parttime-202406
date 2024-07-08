// crear una function de conversión em binario

function binaryToDecimal(binary) {
    let decimal = 0;
    for(let i= 0; i< binary.length; i++) {
        decimal += binary[binary.length - 1 - i] * 2 ** i;
    }
    
 return decimal;
}

var binary = "1010";

console.log(binary + " en decimal es: " + binaryToDecimal(binary));