let string = "A CASA";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";

function stringToLawerCase(string) {
  let stringMinuscula = "";

  if(typeof string !== "string") {
      throw new Error("El parametro deve ser una string.")
      
  }

  for(let i = 0; i < string.length; i++){
      let found = false;
      
      for(let j = 0; j < mayusculas.length; j++){
          
          if(string[i] === mayusculas[j]){
              stringMinuscula += minusculas[j];
              found = true;
              break;
          }
      }

      if(!found){
          stringMinuscula += string[i];
      }

  }

  return stringMinuscula;
}

const result1 = stringToLawerCase("CASA");
console.assert(result1 === "CASA".toLowerCase(), { 
result: result1, message: "Test 1 No pasado " });

const result2 = stringToLawerCase('HOLA');
console.assert(result2 === 'HOLA'.toLowerCase(), { 
result: result2, message: "Test 2 No pasado " });

const result3 = stringToLawerCase("pERRo y GATo");
console.assert(result3 === "pERRo y GATo".toLowerCase(), { 
result: result3, message: "Test 3 No pasado " });