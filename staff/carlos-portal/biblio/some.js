const Biblio = require("./constructor")

function some (){
for (let i = 0; i < this.length; i++) {
    if (i in this) {
    if (callback(this[i], i, this)) {return true;}
            }
        }
        
        return false;
    }
module.exports = some