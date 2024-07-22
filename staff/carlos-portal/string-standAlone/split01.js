

//split
//almacenar datos en array en valor string rompiendo a traves de un patron 
//el patron no se almacena 


let string = ""// esta sera un string de paso para guardar los cortes antes de añadirlos al array para poder
//añadirlos por partes
let array = [] // aqui guardare el array que devuelva 
let arrayCortado = []// esta será por si doy numero de cortes


function split(str, pattern,cortes){
    // unas cuantas condiciones iniciales para amenizar la lectura del código 
    if (str === null || undefined ){return "Bro estoy haciendo esto a las 3 am portate con el TDD"}
    if ( pattern = undefined || pattern === null){
        for (let a = 0; a<str.length; a++){
            array.push(a)
        }
        return array}
    if (cortes === null || undefined || 0){return array.push(str)}
     while (i<str.length) {
     //primer bloque de codigo de busqueda 
         if( pattern[j] === str[i] ){
             
             // aqui aun estoy incluyendo el patron :( -- patron detected position = newstring.length - pattern.length 
             patternFound += pattern[j];
             str += pattern[j] // aqui lo añado todo creando el subgrupo

          j++;
              // si coinciden caracteres entre patron y string se guarda en patron trobat =D
               // y se continua con el siguiente caracter del patron
           } else {
               newString += str[i] // cuando no se cumpla la igualdad
               patternFound = '';// la cadena vuelve a estar vacia
               j = 0;// empezamos de nuevo con el patron a buscar
           }
 
           if (patternFound === pattern) { // esto nos sirve para salir de while 
               found = true;// si hemos encontrado el patron, quiere decir que todo el espacio hasta ahora 
               //debe ser tomado como un grupo único por tanto debe ser alacenado como tal 
              array.push(string)
              string = "" // aqui reinicio la variable string 
               ;
           }
  
                                                 
         
         
           i++;// seguimos recorriendo la string 
       }
    
    }
    if (cortes !== null || undefined || Number(cortes) <= 1 )//aqui decido petarme las leyes de sintaxis de javascript
    {
        Math.floor(cortes)
        for (let x = 0 ; x<cortes;x++){
            arrayCortado.push(array[x])
             
        }
    // Aseguramos que cortes sea un entero
        }

     else{
        return array ;}// el array

