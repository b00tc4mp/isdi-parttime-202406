/* recibo una cadena de caracteres y debo realizar una funcion que cambie de
mayuscula a minuscula
- Guardo en una variable las letras mayusculas y en otra las minusculas.
- declaro una variable donde guardar lo que voy a devolver
- recorro el string para saber que letras voy a convertir a minuscula
*/

function toLowerCase(string) {
    
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const minusculas = 'abcdefghijklmnopqrstuvwxyz'
  let inLowers = ''
      
      for (let i = 0; i < string.length; i++) {
          for (let j = 0; j < mayusculas.length; j++){
              if (string[i] === mayusculas[j] || minusculas.indexOf(string[i]) === j){
              inLowers += minusculas[j];
                  break
              } 
          }
          
      }
      return inLowers
  }
  
  const result1 = toLowerCase('HOLA');
  console.assert(result1 === 'HOLA'.toLowerCase(), { result: result1, message: "Test 1 No pasado ",});
  if (result1 === 'HOLA'.toLowerCase()) console.log('Test 1 pasado');
  
  const result2 = toLowerCase('hOLA');
  console.assert(result2 === 'hOLA'.toLowerCase(), { result: result2, message: "Test 2 No pasado ",});
  if (result2 === 'hOLA'.toLowerCase()) console.log('Test 2 pasado');
  
  const result3 = toLowerCase('HOlaaa');
  console.assert(result3 === 'HOlaaa'.toLowerCase(), { result: result3, message: "Test 3 No pasado ",});
  if (result3 === 'HOlaaa'.toLowerCase()) console.log('Test 3 pasado');