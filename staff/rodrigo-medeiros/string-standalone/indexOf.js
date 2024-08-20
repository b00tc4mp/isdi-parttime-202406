// challenge indexOf

function indexOfString(string, searchString, startPosition) {
    if (typeof startPosition !== 'number') return -1;
    if (typeof searchString !== 'string') return -1
    if (startPosition < 0) {startPosition = 0};
    if (startPosition > string.length - searchString.length) return -1
     let countMatches = 0
    for (let i = 0; i <= string.length - searchString.length;i++) {
        let result = false
        for (let j = 0; j < searchString.length; j++) {
            if (string[i + j] === searchString[j]) {
                countMatches++
    
            }}
        if (countMatches === searchString.length) return startPosition
        if (countMatches = 0) return -1;
        } 
    }
    
    
    
    
    
    
    const result1 = indexOfString("Hello", "H",0);
    console.assert(result1 === "Hello".indexOf("H",0), {
      result: result1,
      message: "Test 1 No pasado ",
    });
    const result2 = indexOfString("Hola", "Ho", 0);
    console.assert(result2 === "Hola".indexOf("Ho",0), {
      result: result2,
      message: "Test 2 No pasado ",
    });
    
    const result3 = indexOfString("casoSinIndice", null, '');
    console.assert(result3 === "casoSinIndice".indexOf(null, 2), {
      result: result3,
      message: "Test 3 No pasado ",
    });
    
    const result4 = indexOfString("world", "wr", 99);
    console.assert(result4 === "world".indexOf("wr",0), {
      result: result4,
      message: "Test 4 No pasado ",
    });
    
    const result5 = indexOfString("world", "rld", 4);
    console.assert(result5 === "world".indexOf("rld", 4), {
      result: result5,
      message: "Test 5 No pasado ",
    });
    
    const result6 = indexOfString("oooo", "oo", 2);
    console.assert(result6 === "oooo".indexOf("oo", 2), {
      result: result6,
      message: "Test 6 No pasado ",
    });