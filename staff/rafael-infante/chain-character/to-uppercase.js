/* recibo una cadena de caracteres y debo realizar una funcion que cambie de
minuscula a mayuscula
- Guardo en una variable las letras mayusculas y en otra las minusculas.
- declaro una variable donde guardar lo que voy a devolver
- recorro el string para saber que letras voy a convertir a mayuscula
- reviso que la primera letra no sea mayuscula si no es mayuscula la elimino
- despues debo buscar esa letra en el 
*/

function toUpperCase() {
    
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const minusculas = 'abcdefghijklmnopqrstuvwxyz'
  let inUppers = ''
      
      for (let i = 0; i < this.length; i++) {
          for (let j = 0; j < minusculas.length; j++){
              if (this.value[i] === minusculas[j] || mayusculas.indexOf(this.value[i]) === j){
              inUppers += mayusculas[j];
                  break
              } 
          }
          
      }
      return inUppers
  }
  
module.exports = toUpperCase;