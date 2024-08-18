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