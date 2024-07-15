//str.indexOf(searchTerm)
// version standalone

// Tengo dos valores, string y searchTerm. Hay que encontrar el segundo valor dentro del primero y que devuelva cuál es su index. 
    // Divido la string en partes para poder compararla con lo que quiero buscar de forma individual. 
    // Si encuentro una coincidencia, quiero que me diga en qué posición indexada se encuentra.

    function indexOf(string, searchTerm) {
      // Casos especiales
      if (searchTerm === null) return -1;
      if (searchTerm === '') return 0;
      
      // Iterar sobre la cadena principal hasta el punto donde todavía puede haber una coincidencia
      for (let i = 0; i <= string.length - searchTerm.length; i++) {
          let match = true;
          // Iterar sobre la palabra que queremos buscar
          for (let j = 0; j < searchTerm.length; j++) {
              
              // Si la posición resultante de sumar i+j NO es igual al carácter de la posición J, no hay match.
              if (string[i + j] !== searchTerm[j]) {
                  
                  match = false;
                 // Si NO hay match (match = FALSE), este break nos saca de este bucle. Si match es TRUE: seguirá dentro del bucle for(j) y buscará el siguiente carácter.
                  break; 
              }
          }
          if (match) return i; // Si match = true, devuélveme el valor de i. De lo contrario, volverá a empezar el bucle con un nuevo valor de i.
      }
      // Si no se encuentra el término de búsqueda, devolver -1
      return -1;
  }
  
  const result1 = indexOf("Hello, my name is Carl", "l");
  console.assert(result1 === "Hello, my name is Carl".indexOf("l"), { result: result1, message: "Test 1 No pasado ",});
  
  const result2 = indexOf("Hello, my name is Carl", "ly");
  console.assert(result2 === "Hello, my name is Carl".indexOf("ly"), { result: result2, message: "Test 2 No pasado ",});
  
  const result3 = indexOf("Lamine Yamal cada dia te quiero más", "");
  console.assert(result3 === "Lamine Yamal cada dia te quiero más".indexOf(""), { result: result3, message: "Test 3 No pasado ",});
    
  const result4 = indexOf("Chiquito de la calzada", null);
  console.assert(result4 === "Chiquito de la calzada".indexOf(null), { result: result4, message: "Test 4 No pasado ",});
    
  const result5 = indexOf("Nadie sabe nada", "Espectáculo");
  console.assert(result5 === "Nadie sabe nada".indexOf("Espectáculo"), { result: result5, message: "Test 5 No pasado ",});