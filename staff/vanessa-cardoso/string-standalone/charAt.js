// str.charAt(indice)
// version stand alone 
function charAt (string, index) {
    
    /*
    tenemos una palabra , que entra como "string" y una posición de un carácter de esa palabra que llega como "index".
    la tarea es localizar el "index" dentro de "string", devolviendo el caracter que ocupa "index".
 
    recorrer "string" hasta la posición de "index"
    alojar el caracter de la posición "index" en otra variable
    verificcar que el caracter alojado en la variable coincide con lo solicitad en los tests
    */
 
 return string[index];
     
 }
 
 
 const result1 = charAt("Hello", 2)
 console.assert(result1 === "Hello".charAt(2),{result:result1, message: "Test 1 No pasado "})
 
 const result2 = charAt("Hola", 2)
 console.assert(result2 === "Hola".charAt(2),{result:result2, message: "Test 2 No pasado "})
 
 const result3 = charAt("casoSinIndice", null)
 console.assert(result3 === "casoSinIndice".charAt(null),{result:result3, message: "Test 3 No pasado "})