const ChainCharacters = require("./constructor.js");
const at = require("./at.js");
const charAt = require("./chart-at.js");
const concat = require("./concat.js");
const endsWith = require("./ends-with.js");
const includes = require("./includes.js");
const indexOf = require("./index-of.js");

ChainCharacters.prototype.at = at;
ChainCharacters.prototype.charAt = charAt;
ChainCharacters.prototype.concat = concat;
ChainCharacters.prototype.endsWith = endsWith;
ChainCharacters.prototype.includes = includes;
ChainCharacters.prototype.indexOf = indexOf;

module.exports = ChainCharacters;