const ChainCharacters = require("./contructor.js");
const at = require("./at.js");
const charAt = require("./chart-at.js");

ChainCharacters.prototype.at = at;
ChainCharacters.prototype.charAt = charAt;

module.exports = ChainCharacters;
