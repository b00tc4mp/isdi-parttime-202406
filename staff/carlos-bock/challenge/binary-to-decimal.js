//create a function that changes binary numbers to decimal. 


function binaryToDecimal(binary) {
    var decimal = 0;
    decimal = parseInt(binary,2);
    return decimal;
  }
  
  var binary = "1110";
  
  console.log(binary + " en decimal es: " + binaryToDecimal(binary));
  


  /* creating an alternative function to convert the numbers
  function binaryConvertDec(binarynum) {
    var decimal = 0;

    for ( i = 0; i < binary.length; i++ ) {
        var digit = binary[binary.length - 1 - i];
        decimal += digit * Math.pow(2, i)

    }
    return decimal;
  }*/