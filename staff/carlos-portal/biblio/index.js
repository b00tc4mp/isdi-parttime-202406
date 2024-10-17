const Biblio = require("./constructor")
const at = require("./at.js")
const pop = require("./pop.js")
const map = require("./map.js")
const copyWithin = require("./copy-within.js")


    
Biblio.prototype.at = at;
Biblio.prototype.concat = concat;
Biblio.prototype.pop = pop;
Biblio.prototype.copyWithin = copyWithin;
Biblio.prototype.map = map;




module.exports = Biblio