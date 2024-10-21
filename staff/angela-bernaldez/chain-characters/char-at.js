const ChainCharacters = require("./constructor.js")

function charAt(index) {
  
    let result = this.value[index];
  
    if (typeof index !== "number") {
      result = this.value[0];
    } else if (index >= this.length) {
      result = "";
    }
    
    return new ChainCharacters(result)
}

module.exports = charAt
  


