const ChainCharacter = require("./contructor.js");
const at = require("./at.js");

ChainCharacter.prototype.at = at;

module.exports = ChainCharacter;