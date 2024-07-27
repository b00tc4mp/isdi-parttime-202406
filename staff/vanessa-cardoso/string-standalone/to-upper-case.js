
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";

function stringToUpperCase(string) {
  let stringMayusculas = "";

  if(typeof string !== "string") {
      throw new Error("El parametro deve ser una string.")
  }
 
  // usamos 2 variaveis i e j (maiusculas e minusculas).
 // usaremos um booleano "found" para saber se o caracter foi encontrado
 
 for(let i = 0; i < string.length; i++){
      let found = false;
      
      for(let j = 0; j < minusculas.length; j++){
          
          if(string[i] === minusculas[j]){
              stringMayusculas += mayusculas[j];
              found = true;
              break;
          }
      }

      if(!found){
          stringMayusculas += string[i];
      }

  }

  return stringMayusculas;
}

const result1 = stringToUpperCase("cAsa");
console.assert(result1 === "cAsa".toUpperCase(), { 
result: result1, message: "Test 1 No pasado " });

const result2 = stringToUpperCase('hola');
console.assert(result2 === 'hola'.toUpperCase(), { 
result: result2, message: "Test 2 No pasado " });

const result3 = stringToUpperCase("perRo y GaTo");
console.assert(result3 === "perRo y GaTo".toUpperCase(), { 
result: result3, message: "Test 3 No pasado " });