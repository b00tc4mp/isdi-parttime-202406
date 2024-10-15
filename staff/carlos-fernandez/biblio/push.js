const Biblio = require("./constructor.js");

function push(...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
    this.length++;
  }
  return this.length;
}

module.exports = push;
