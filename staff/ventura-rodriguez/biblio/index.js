const Biblio = require("./contructor.js");
const at = require("./at.js");
const map = require("./map.js");

Biblio.prototype.at = at;
Biblio.prototype.map = map;

module.exports = Biblio;
