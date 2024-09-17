const Biblio = require("./contructor.js");
const at = require("./at.js");

Biblio.prototype.at = at;

module.exports = Biblio;
