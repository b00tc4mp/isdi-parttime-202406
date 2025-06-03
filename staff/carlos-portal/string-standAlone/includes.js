//Vamos a verificar si un string contiene un patron o no
/*Recorreremos el string y buscaremos coincidencias con el patron 
para hacer esto crearemos un bucle while verificado como false es decir, no se cumple el patron 
entonces mantendremos como falso 
cuando encuentre match comenzara a iterar sobre el patron a la vez que sobre el string 
emparejando 1 a 1 
// Aun sin console asserts


function included(string, pattern) {
    

    let found = false;// inicializamos variable de control como falsa
    
    let patternFound = '';// patron como cadena vacia
   
    let i = 0;// y nuestras variables para recorrer
    let j = 0;

    while (i < string.length) {//la primera idea era hacerlo con un while false pero así es mas claro 
        if (string[i] == pattern[j]) {
            patternFound += string[i];
            j++;// si coinciden caracteres entre patron y string se guarda en patron trobat 
            // y se continua con el siguiente caracter del patron
        } else {// cuando no se cumpla la igualdad
            patternFound = '';// la cadena vuelve a estar vacia
            j = 0;// empezamos de nuevo con el patron a buscar
        }

        if (patternFound === pattern) { // esto nos sirve para salir de while 
            found = true;// si se cumple que encontramos el patron el valor found para a true
            break;
        }

        i++;// seguimos recorriendo la string 
    }

    return found;// devolvemos si encontramos el patron o no
}
*/


function includes(string, searchString) {
    if (searchString === null) return false;
  
    let result = false;
  
    for (let i = 0; i < string.length; i++) {
      let countMatches = 0;
  
      for (let j = 0; j < searchString.length; j++) {
        if (string[i + j] === searchString[j]) countMatches++;
      }
  
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
  console.assert(result7 === "world".includes("wu"), {
    result: result7,
    message: "Test 7 No pasado ",
  });