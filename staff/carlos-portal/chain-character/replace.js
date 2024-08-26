let i = 0 
let j = 0 
let replacement =" "+"replacement" +" "
let newString = ""; 
let patternFound = "";
let found = false; 
// new string = primer corte de string + reemplazo + segundo corte 

function replace( pattern, replacement){
   if ( this.value, pattern,replacement = undefined || pattern,replacement,this.value === null){
       return "bruh"}
    while (i<this.value.length) {
    //primer bloque de codigo de busqueda 
        if( pattern[j] === this.value[i] ){

            // aqui aun estoy incluyendo el patron :( -- patron detected position = newstring.length - pattern.length 
            patternFound += pattern[j];
         j++;
             // si coinciden caracteres entre patron y string se guarda en patron trobat =D
              // y se continua con el siguiente caracter del patron
          } else {
              newString += this.value[i] // cuando no se cumpla la igualdad
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

module.exports = replace