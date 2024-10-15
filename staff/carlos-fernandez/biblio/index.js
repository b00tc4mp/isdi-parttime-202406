const Biblio = require("./constructor.js");

const at = require("./at.js");
const concat = require("./concat.js");
const copyWithin = require("./copy-within.js");
const every = require("./every.js");
const fill = require("./fill.js");
const filter = require("./filter.js");
const findIndex = require("./find-index.js");
const findLast = require("./find-last.js");
const find = require("./find.js");
const forEach = require("./for-each.js");
const includes = require("./includes.js");
const indexOf = require("./index-of.js");
const map = require("./map.js");
const pop = require("./pop.js");

Biblio.prototype.at = at;
Biblio.prototype.concat = concat;
Biblio.prototype.copyWithin = copyWithin;
Biblio.prototype.every = every;
Biblio.prototype.fill = fill;
Biblio.prototype.filter = filter;
Biblio.prototype.findIndex = findIndex;
Biblio.prototype.findLast = findLast;
Biblio.prototype.find = find;
Biblio.prototype.forEach = forEach;
Biblio.prototype.includes = includes;
Biblio.prototype.indexOf = indexOf;
Biblio.prototype.map = map;
Biblio.prototype.pop = pop;

module.exports = Biblio;
