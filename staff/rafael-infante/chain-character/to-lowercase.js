/* recibo una cadena de caracteres y debo realizar una funcion que cambie de
mayuscula a minuscula
- Guardo en una variable las letras mayusculas y en otra las minusculas.
- declaro una variable donde guardar lo que voy a devolver
- recorro el string para saber que letras voy a convertir a minuscula
*/

function toLowerCase() {
    
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const minusculas = 'abcdefghijklmnopqrstuvwxyz'
  let inLowers = ''
      
      for (let i = 0; i < this.length; i++) {
          for (let j = 0; j < mayusculas.length; j++){
              if (this.value[i] === mayusculas[j] || minusculas.indexOf(this.value[i]) === j){
              inLowers += minusculas[j];
                  break
              } 
          }
          
      }
      return inLowers
  }

  module.exports = toLowerCase;