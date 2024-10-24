const Biblio = require("./constructor");

function forEach(callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
}

module.exports = forEach;
