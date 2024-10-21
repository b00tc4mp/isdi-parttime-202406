const Biblio = require("./contructor");

/**
 * Concatenates the current Biblio instance with the provided arguments.
 *
 * @param {...Biblio|*} args - The elements or Biblio instances to concatenate.
 * @returns {Biblio} A new Biblio instance containing the concatenated elements.
 */
function concat() {
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
      result.length++;
    }
  }

  return result;
}

module.exports = concat;
