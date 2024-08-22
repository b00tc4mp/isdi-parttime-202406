const ChainCharacters = require("./constructor.js");

const at = require("./at.js");

ChainCharacters.prototype.at = at;

module.exports = ChainCharacters;