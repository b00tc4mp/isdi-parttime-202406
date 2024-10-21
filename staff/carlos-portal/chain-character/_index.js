const ChainCharacter = require("./_constructor.js");

const at = require("./at.js");
ChainCharacter.prototype.at = at;


const charAt = require("./char-at.js");
ChainCharacter.prototype.charAt = charAt;

const concat = require("./concat.js");
ChainCharacter.prototype.concat = concat;


const endsWith = require("./ends-with.js");
ChainCharacter.prototype.endsWith = endsWith;
 

const includes = require("./includes.js");
ChainCharacter.prototype.includes = includes;
 

const  repeat = require("./repeat.js");
ChainCharacter.prototype.repeat = repeat;
 


const replace = require("./replace.js");
ChainCharacter.prototype.replace = replace;
 

const slice  = require("./slice.js");
ChainCharacter.prototype.slice = slice;
 

const split = require("./split.js");
ChainCharacter.prototype.split = split;
 

const startsWith = require("./starts-with.js");
ChainCharacter.prototype.startsWith = startsWith;
 

const substring = require("./substring.js");
ChainCharacter.prototype.substring = substring;
 

const toLowerCase = require("./toLowerCase.js");
ChainCharacter.prototype.toLowerCase = toLowerCase;
 

const toUpperCase = require("./toUpperCase.js");
ChainCharacter.prototype.toUpperCase = toUpperCase;
 

const trim = require("./trim.js");
ChainCharacter.prototype.trim = trim;


module.exports = ChainCharacter
