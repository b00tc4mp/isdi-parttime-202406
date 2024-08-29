// str.charAt(indice)
// version stand alone 
 /*
       Tenemos una palabra, que entra como "string" y una posición de un carácter de esa palabra que llega como "index".
       La tarea es localizar el "index" dentro de "string", devolviendo el carácter que ocupa "index".
   
       Recorrer 'string' hasta la posición de 'index' con un bucle
       Alojar el caracter de la posición 'index' en otra variable
       Verificar que el caráctercter alojado en la variable coincide con lo solicitado en los tests
      */

function charAt(index) {
   
    if (typeof index === 'number') {
        return this.value[index];
    } else if (index >= this.length) {
        return "";
    } else { return this.value[0] };
}

module.exports = charAt;

