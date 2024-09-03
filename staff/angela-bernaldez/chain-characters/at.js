const ChainCharacters = require("./constructor.js")


  
    if (index === null) return new ChainCharacters(this.value[0]);
  
    let result;
  
    for (let i = 0; i < this.length; i++) {
      const character = this.value[i];
  
      if (i === index) result = character;
      else if (index < 0 && i === this.length + index) result = character
    }

    // return a new instance of the constructor function, initialized with the result string
    // this means that instead of modifying the original object, 
    // the method generates a fresh ChainCharacters object that contains the repeated string. 

    // if result was returned, a string would be returned in this case
    // and we want to return the same type of data - object 
    return new ChainCharacters(result)
}

module.exports = at
  

  
