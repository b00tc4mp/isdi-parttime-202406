const ChainCharacters = require("./constructor.js");
const at = require("./at.js");
const charAt = require("./charAt.js");
const concat = require("./concat.js")

ChainCharacters.prototype.at = at;
ChainCharacters.prototype.charAt = charAt;
ChainCharacters.prototype.concat = concat;

module.exports = ChainCharacters;