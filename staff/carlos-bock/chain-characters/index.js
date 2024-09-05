const ChainCharacters = require("./constructor.js");
const at = require("./at.js");
const charAt = require("./charAt.js");
const concat = require("./concat.js")
const endsWith = require("./endsWith.js")
const includes = require("./includes.js")
const indexOf = require("./indexOf.js")
const repeat = require("./repeat.js")


const split = require("./split.js")

const startsWith = require("./startsWith.js")
const toLowerCase = require("./toLowerCase.js")
const toUpperCase = require("./toUpperCase.js")
const trim = require("./trim.js")


ChainCharacters.prototype.at = at;
ChainCharacters.prototype.charAt = charAt;
ChainCharacters.prototype.concat = concat;
ChainCharacters.prototype.endsWith = endsWith;
ChainCharacters.prototype.includes = includes;
ChainCharacters.prototype.indexOf = indexOf;
ChainCharacters.prototype.repeat = repeat;


ChainCharacters.prototype.split = split;

ChainCharacters.prototype.startsWith = startsWith;
ChainCharacters.prototype.toLowerCase = toLowerCase;
ChainCharacters.prototype.toUpperCase = toUpperCase;
ChainCharacters.prototype.trim = trim;


module.exports = ChainCharacters;