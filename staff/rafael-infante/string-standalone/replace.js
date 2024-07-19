  let i = 0 
  let j = 0 
  let newString = ""; 
  let patternFound = "";
  let found = false; 
  let replacement = "replacement" + " "
function replace(str, pattern, replacement){

    while (i<str.length) {
    //primer bloque de codigo de busqueda 
        if( pattern[j] === str[i] ){
            
            // aqui aun estoy incluyendo el patron :( -- patron detected position = newstring.length - pattern.length 
            patternFound += pattern[j];
         j++;
             // si coinciden caracteres entre patron y string se guarda en patron trobat =D
              // y se continua con el siguiente caracter del patron
          } else {
              newString += str[i] // cuando no se cumpla la igualdad
              patternFound = '';// la cadena vuelve a estar vacia
              j = 0;// empezamos de nuevo con el patron a buscar
          }

          if (patternFound === pattern) { // esto nos sirve para salir de while 
              found = true;
              newString += replacement// si se cumple que encontramos el patron el valor found para a true
              ;
          }
 
          i++;// seguimos recorriendo la string 
      }
    return newString;// devolvemos la cadena con los remplazos 
  }

const result1 = replace('jnkjnkj palabra njjnk','palabra','replacement')
console.assert(result1 === 'jnkjnkj palabra njjnk'.replace('palabra', 'replacement'), {result: result1, message: "Test 1 No pasado "})