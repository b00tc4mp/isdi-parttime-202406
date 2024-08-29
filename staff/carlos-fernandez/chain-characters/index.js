const ChainCharacters = require("./constructor");

const at = require("./at.js");
const charAt = require("./char-at.js");
const concat = require("./concat.js");
const endsWith = require("./ends-with.js");
const includes = require("./includes.2.js");
const indexOf = require("./index-of.js");
const repeat = require("./repeat.js");
const replace = require("./replace.js");
const slice = require("./slice.js");
const split = require("./split.js");
const startsWith = require("./starts-with.js");
const toLowerCase = require("./to-lower-case.js");
const toUpperCase = require("./to-upper-case.js");
const trimStart = require("./trim-start.js");
const trim = require("./trim.js");

ChainCharacters.prototype.at = at;
ChainCharacters.prototype.charAt = charAt;
ChainCharacters.prototype.concat = concat;
ChainCharacters.prototype.endsWith = endsWith;
ChainCharacters.prototype.includes = includes;
ChainCharacters.prototype.indexOf = indexOf;
ChainCharacters.prototype.repeat = repeat;
ChainCharacters.prototype.replace = replace;
ChainCharacters.prototype.slice = slice;
ChainCharacters.prototype.split = split;
ChainCharacters.prototype.startsWith = startsWith;
ChainCharacters.prototype.toLowerCase = toLowerCase;
ChainCharacters.prototype.toUpperCase = toUpperCase;
ChainCharacters.prototype.trimStart = trimStart;
ChainCharacters.prototype.trim = trim;

module.exports = ChainCharacters;
