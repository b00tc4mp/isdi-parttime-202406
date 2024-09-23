const Biblio = require("./contructor.js");
const at = require("./at.js");
const concat = require("./concat.js");
const copyWithin = require("./copy-within.js");
const every = require("./every.js");
const fill = require("./fill.js");
const filter = require("./filter.js");
const findIndex = require("./find-index.js");
const findLast = require("./find-last.js");
const find = require("./find.js");
const flat = require("./flat.optional.js");
const map = require("./map.js");

Biblio.prototype.at = at;
Biblio.prototype.concat = concat;
Biblio.prototype.copyWithin = copyWithin;
Biblio.prototype.every = every;
Biblio.prototype.fill = fill;
Biblio.prototype.filter = filter;
Biblio.prototype.findIndex = findIndex;
Biblio.prototype.findLast = findLast;
Biblio.prototype.find = find;
Biblio.prototype.flat = flat;
Biblio.prototype.map = map;

module.exports = Biblio;
