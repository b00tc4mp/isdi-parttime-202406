//str.at(indice)
//Version stand alone


function at(string, index) {
  // correr para buscar caracter igual a indice
  // guardar caracter en un variable 
  // devolver variable
  // si el indice es negativo guardar en segundo variable 
  // devolver caracter guardado en variable 
  let result;

  if (index === null) {
    return string[0];
  }

  if (index >= 0) {
    for (let i = 0; i < string.length; i++) {
      const characterValue = string[i];
      if (index === i) {
        result = characterValue;
        return result;
      }

    }
  } else {
    result = string[string.length + index]
    return result;
  }
}



const result1 = at("Hello", 2);
console.assert(result1 === "Hello".at(2), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = at("Hola", -1);
console.assert(result2 === "Hola".at(-1), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = at("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".at(null), {
  result: result3,
  message: "Test 3 No pasado ",
});


