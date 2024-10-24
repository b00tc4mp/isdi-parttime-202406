const Biblio = require("./constructor")

function pop() {
    // Verifica si hay elementos en el array
    if (this.length > 0) {
      // Obtiene el último elemento
      let popped = this[this.length - 1];
      // Reduce la longitud del array, eliminando el último elemento
      this.length--;
      // Retorna el elemento eliminado
      return popped;
    }
    // Si el array está vacío, retorna undefined
    return undefined;
  }

module.exports = pop

