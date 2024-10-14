const Biblio = require("./constructor.js");

const at = require("./at.js");
const concat = require("./concat.js");
const copyWithin = require("./copy-within.js");
const every = require("./every.js");
const fill = require("./fill.js");

Biblio.prototype.at = at;
Biblio.prototype.concat = concat;
Biblio.prototype.copyWithin = copyWithin;
Biblio.prototype.every = every;
Biblio.prototype.fill = fill;

module.exports = Biblio;
