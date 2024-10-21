const Biblio = require("./constructor");

function reverse() {
  let counter = 0;
  let newArray = [];
  for (let i = this.length - 1; i >= 0; i--) {
    newArray[counter] = this[i];
    counter++;
  }

  for (let i = 0; i < newArray.length; i++) {
    this[i] = newArray[i];
  }
  return this;
}

module.exports = reverse;
