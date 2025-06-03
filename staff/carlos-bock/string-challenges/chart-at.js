// str.charAt(indice)
// version stand alone 

function charAt(string, index) {
    /*
       Tenemos una palabra, que entra como "string" y una posición de un carácter de esa palabra que llega como "index".
       La tarea es localizar el "index" dentro de "string", devolviendo el carácter que ocupa "index".
   
       Recorrer 'string' hasta la posición de 'index' con un bucle
       Alojar el caracter de la posición 'index' en otra variable
       Verificar que el caráctercter alojado en la variable coincide con lo solicitado en los tests
      */
    if (typeof index === 'number') {
        return string[index];
    } else if (index >= string.length) {
        return "";
    } else { return string[0] };
}



const result1 = charAt("Hello", 2)
console.assert(result1 === "Hello".charAt(2), { result: result1, message: "Test 1 No pasado " })

const result2 = charAt("Hola", 2)
console.assert(result2 === "Hola".charAt(2), { result: result2, message: "Test 2 No pasado " })

const result3 = charAt("casoSinIndice", null)
console.assert(result3 === "casoSinIndice".charAt(null), { result: result3, message: "Test 3 No pasado " })