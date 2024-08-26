function at(index) {
    let result = "";
  
    if (index === null) return this.value[0];
  
    for (let i = 0; i < this.length; i++) {
      const character = this.value[i];
  
      if (index === i) {
        result = character;
      } else if (index < 0 && i === this.length + index) {
        result = character;
      }
    }
    return result;
  }
  
  module.exports = at;