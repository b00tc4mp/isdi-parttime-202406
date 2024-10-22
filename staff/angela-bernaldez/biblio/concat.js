const Biblio = require("./constructor.js")

function concat() {

    if (!(this instanceof Biblio)) {
      throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    const result = new Biblio();
    while (result.length < this.length) {
      result[result.length] = this[result.length];
      result.length++;
    }
  
    for (let i = 0; i < arguments.length; i++) {
      let element = arguments[i];
      if (!(element instanceof Biblio)) element = new Biblio(element);
      for (let j = 0; j < element.length; j++) {
        result[result.length] = element[j];
        // need to manually update length property
        result.length++;
      }
    }
    return result;
}

module.exports = concat 