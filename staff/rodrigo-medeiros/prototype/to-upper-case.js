/**
 * Convierte todos los caracteres minúsculos de la cadena actual a mayúsculas.
 * 
 * Para cada carácter en la cadena, la función verifica si es un carácter minúsculo.
 * Si lo es, se convierte a su equivalente en mayúsculas. Si no, el carácter permanece sin cambios.
 *
 * @returns {string} - Una nueva cadena con todos los caracteres minúsculos convertidos a mayúsculas.
 */
// el ejercicio consiste en recoger cada caractere de la string y verificar si es igual a algun caractere de la string minuscula, si así es
// debemos cambiar ese caractere por su equivalente en la string maiusculas para asi convertir minusculos en maiusculas, si no fuera un caractere
// minusculo debemos mantener el caractere

function toUpperCase() {
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < this.length; i++) {
    let encontrado = false;

    for (let j = 0; j < maiusculas.length; j++) {
      if (this.value[i] === minusculas[j]) {
        encontrado = true;
        result += maiusculas[j];
        break;
      }
    }
    if (!encontrado) {
      result += this.value[i];
    }
  }
  return result;
}
module.exports = toUpperCase