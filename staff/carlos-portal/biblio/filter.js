const Biblio = require("./constructor.js");

function filter(callback) {
  let result = new Biblio();

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    if (callback(element)) {
      result[result.length] = element;
      result.length += 1;
    }
  }
  return result;
}

module.exports = filter;
