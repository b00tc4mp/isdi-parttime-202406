/* recibo una cadena de caracteres y debo realizar una funcion que cambie de
minuscula a mayuscula
- Guardo en una variable las letras mayusculas y en otra las minusculas.
- declaro una variable donde guardar lo que voy a devolver
- recorro el string para saber que letras voy a convertir a mayuscula
- reviso que la primera letra no sea mayuscula si no es mayuscula la elimino
- despues debo buscar esa letra en el 
*/

function toUpperCase(string) {
    
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const minusculas = 'abcdefghijklmnopqrstuvwxyz'
  let inUppers = ''
      
      for (let i = 0; i < string.length; i++) {
          for (let j = 0; j < minusculas.length; j++){
              if (string[i] === minusculas[j] || mayusculas.indexOf(string[i]) === j){
              inUppers += mayusculas[j];
                  break
              } 
          }
          
      }
      return inUppers
  }
  
  const result1 = toUpperCase('hola');
  console.assert(result1 === "hola".toUpperCase(), { result: result1, message: "Test 1 No pasado ",});
  
  const result2 = toUpperCase('Hola');
  console.assert(result2 === "Hola".toUpperCase(), { result: result2, message: "Test 2 No pasado ",});
  
  const result3 = toUpperCase('HoLAA');
  console.assert(result3 === "HoLAA".toUpperCase(), { result: result3, message: "Test 3 No pasado ",});