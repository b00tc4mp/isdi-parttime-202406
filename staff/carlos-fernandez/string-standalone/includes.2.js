//str.includes(searchString)
//Version stand alone

function includes(string, searchString) {
    if (searchString === null) return false;
  
    let result = false;
    
  // Empieza a iterar sobre string
    
    for (let i = 0; i < string.length; i++) {
      // Declaramos un contador de coincidencias
      let countMatches = 0; 
      
  // Empieza a iterar sobre searchString
      
      for (let j = 0; j < searchString.length; j++) {
  
        // [i + j] nos sirve para hacer avanzar la i sin necesidad de salir del bucle.
        // Cuando j > searchString.length, pasa al siguiente if (countMatches === searchString.length).
        if (string[i + j] === searchString[j]) countMatches++; 
      }
        // Si esto no se cumple, vuelve al primer bucle for (let = i) y sigue avanzando la variable i, reseteando countMatches a 0.
      if (countMatches === searchString.length) result = true;
    }
  
    return result;
  }
  
  const result1 = includes("Hello", "H");
  console.assert(result1 === "Hello".includes("H"), {
    result: result1,
    message: "Test 1 No pasado ",
  });
  
  const result2 = includes("Hola", "Ho");
  console.assert(result2 === "Hola".includes("Ho"), {
    result: result2,
    message: "Test 2 No pasado ",
  });
  
  const result3 = includes("casoSinIndice", null);
  console.assert(result3 === "casoSinIndice".includes(null), {
    result: result3,
    message: "Test 3 No pasado ",
  });
  
  
  const result4 = includes("world", "wr");
  console.assert(result4 === "world".includes("wr"), {
    result: result4,
    message: "Test 4 No pasado ",
  });
  
  const result5 = includes("world", "rld");
  console.assert(result5 === "world".includes("rld"), {
    result: result5,
    message: "Test 5 No pasado ",
  });
  
  const result6 = includes("world", "wod");
  console.assert(result6 === "world".includes("wod"), {
    result: result6,
    message: "Test 6 No pasado ",
  });
  
  const result7 = includes("world", "wu");
  console.assert(result7 === "wu".includes("wod"), {
    result: result7,
    message: "Test 7 No pasado ",
  });