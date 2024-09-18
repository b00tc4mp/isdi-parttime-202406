const Biblio = require("./contructor.js");
const at = require("./at.js");
const map = require("./map.js");
const concat = require("./concat.js");

Biblio.prototype.at = at;
Biblio.prototype.map = map;
Biblio.prototype.concat = concat;
debugger;
var foo = new Biblio(1, 2, 3, 4, 5);
foo.concat(0, new Biblio(6, 7, 8), 9);
module.exports = Biblio;
