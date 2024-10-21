const Biblio = require("./constructor")

function reverse (){
    let result = []; 
    
    for (let i = this.length - 1, j = 0; i >= 0; i--, j++) {
        result[j] = this[i];
    }
    return result;
};

