const ChainCharacters = require("./constructor.js");
const at = require("./at.js");
const charAt = require("./charAt.js");
const concat = require("./concat.js")

const split = require("./split.js")

const toLowerCase = require("./toLowerCase.js")
const toUpperCase = require("./toUpperCase.js")
const trim = require("./trim.js")


ChainCharacters.prototype.at = at;
ChainCharacters.prototype.charAt = charAt;
ChainCharacters.prototype.concat = concat;

ChainCharacters.prototype.split = split;

ChainCharacters.prototype.toLowerCase = toLowerCase;
ChainCharacters.prototype.toUpperCase = toUpperCase;
ChainCharacters.prototype.trim = trim;


module.exports = ChainCharacters;