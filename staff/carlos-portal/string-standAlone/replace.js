let i = 0 
let j = 0 
let replacement =" "+"replacement" +" "
let newString = ""; 
let patternFound = "";
let found = false; 
// new string = primer corte de string + reemplazo + segundo corte 

function replace(str, pattern, replacement){
   if ( str,pattern,replacement = undefined || pattern,replacement,str === null){
       return "bruh"}
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
/* aqui una pruebita de nada 
let str = "kdjsbfnoñneoñdfnoñjndsjñofjnoñsdjfoñij palabra kasjdbfjbdnsfbodbnfonassouif"
let pattern = "palabra"
console.log(replace(str,pattern,replacement))
*/


//TDD
const result1 = replace("lo que dijo usted de mi era mentira","mentira","pan")
console.assert(result1 === "lo que dijo usted de mi era mentira".replace("mentira","pan")),{
result : result1 , message: "Test 1 no pasado G"}


const result2 = replace("En el curso de Fullstack podemos escoger no hacer TDD","no","")
console.assert(result2 === "En el curso de Fullstack podemos escoger no hacer TDD".replace("no","")),{
result : result2 , message: "Test 2 no pasado G+1"}

const result3 = replace("null","undefined","")
console.assert(result3 === "null".replace("undefined","")),{
result : result3 , message: "Test 3 no pasado porque no has puesto nada rey"}
