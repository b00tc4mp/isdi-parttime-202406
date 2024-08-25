const ChainCharacters = require("./constructor.js");

const at = require("./at.js");
const charAt = require("./char-at.js");

ChainCharacters.prototype.at = at;
ChainCharacters.prototype.charAt = charAt;

module.exports = ChainCharacters;