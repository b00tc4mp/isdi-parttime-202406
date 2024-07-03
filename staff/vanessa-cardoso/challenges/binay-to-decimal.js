// crear una function de conversión em binario

function binaryToDecimal(binary) {
    var decimal = 0;

    for ( i = 0; i < binary.length; i++ ) {
        var digit = binary[binary.length - 1 - i];

        decimal += digit * Math.pow(2, i)

    }
    return decimal;
  }

  var binary = "6010";

  console.log(binary + " en decimal es: " + binaryToDecimal(binary));
