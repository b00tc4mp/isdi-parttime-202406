const Biblio = require("./constructor.js");

function at(index) {
  if (index === undefined || index === null) return this[0];
  if (!(typeof index === "number")) return this[0];
  index < 0 ? (index = this.length + index) : index;

  return this[index];
}

module.exports = at;
