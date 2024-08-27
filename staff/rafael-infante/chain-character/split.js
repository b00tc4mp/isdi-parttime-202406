/* recibo un string y un separador (que es un patron). Debo buscar el patron en la cadena de entrada
si encuentro el patron lo elimino y divido la cadena en un array dependiendo de lo que tenga antes
y despues del patron */

function split(pattern) {
  let newArray = [];
  let elementOfArray = '';

  for (let i = 0; i < this.length; i++) {
  
    if (pattern === '') {
      newArray[i] = this.value[i]; // separo por caracteres

    } else if (this.value[i] === pattern) {
      newArray[newArray.length] = elementOfArray;
      elementOfArray = '';

    } else {
      elementOfArray += this.value[i];
    }
  }
  return newArray
}

module.exports = split;