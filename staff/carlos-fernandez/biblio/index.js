const Biblio = require("./constructor.js");

const at = require("./at.js");
const concat = require("./concat.js");
//const copyWithin = require("./COPY-WITHIN.js");
const every = require("./every.js");

Biblio.prototype.at = at;
Biblio.prototype.concat = concat;
//Biblio.prototype.copyWithin = copyWithin;
Biblio.prototype.every = every;

module.exports = Biblio;
