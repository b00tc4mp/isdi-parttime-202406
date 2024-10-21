const Biblio = require("./constructor");

function sort(callback) {
  if (!(this instanceof Biblio)) return undefined;

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      const a = this[j];
      const b = this[j + 1];

      if (
        (!!callback && callback(a, b) > 0) ||
        (!callback && String(a) > String(b))
      ) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }

  return this;
}

module.exports = sort;
