const Biblio = require("./constructor");

function shift() {
  if (this.length === 0) return undefined;

  const element = this[0];

  for (let i = 0; i < this.length; i++) {
    if (i > 0) {
      this[i - 1] = this[i];
    }
  }
  this.length = this.length - 1;
  return element;
}

module.exports = shift;
