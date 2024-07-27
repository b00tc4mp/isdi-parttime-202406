/* replace() em JavaScript é usado para substituir uma parte
   de uma string por outra. 
*/

function stringReplace(stringOriginal, stringToReplace, newString){
    let result = "";

    
     // usamos 2 variaveis i e j
 // usaremos um booleano "match" 
 
    for(let i = 0; i < stringOriginal.length; i++) {
       let match = true;

       for(let j = 0; j < stringToReplace.length; j++ ){
          if(stringOriginal[i+j] !== stringToReplace[j]) {
            match = false;
            break;
          }
        } 
    
       // Substituição ocorre aqui
        if (match) {
        result += newString;
        i += stringToReplace.length -1; // Avança o índice além da substring encontrada
        } else { 
            result += stringOriginal[i];
        }
    }

   return result;
}


const result1 = stringReplace("Estas bien", "bien", "mal")
console.assert(result1 === "Estas bien".replace("bien", "mal"), {result: result1, message: "Test 1 No pasado "});

const result2 = stringReplace("Mi nombre es Santos", "nombre", "apellido")
console.assert(result2 === "Mi nombre es Santos".replace("nombre", "apellido"), {result: result2, message: "Test 2 No pasado "});

const result3 = stringReplace("Azul y amarillo y branco", "branco", "verde")
console.assert(result3 === "Azul y amarillo y branco".replace("branco", "verde"), {result: result3, message: "Test 3 No pasado "});

