const Biblio = require("./constructor.js");

function filter(callback) {
  let result = new Biblio();

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    /* Tiene que ser result[result.length] y no result[i], porque si encuentra un elemento que no cumple con la 
        callback, añadiría un elemento vacío en caso de [i], pero como queremos que se pare si no cumple, le damos la posición
        de la longitud de result en ese momento*/
    if (callback(element)) {
      result[result.length] = element;
      result.length += 1;
    }
  }
  return result;
}

module.exports = filter;
