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

    return decimal;
  }
  
  var binarynum = "1110";
  
  console.log(binarynum + " en decimal es: " + binaryConvertDec(binarynum)); */