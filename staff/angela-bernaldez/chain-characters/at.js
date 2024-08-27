//str.at(indice)
//Version stand alone
function at(index) {
  
    if (index === null) return this.value[0];
  
    let result;
  
    for (let i = 0; i < this.length; i++) {
      const character = this.value[i];
  
      if (i === index) result = character;
      else if (index < 0 && i === this.length + index) result = character;
    }
    return result;
  }

module.exports = at
  

  
