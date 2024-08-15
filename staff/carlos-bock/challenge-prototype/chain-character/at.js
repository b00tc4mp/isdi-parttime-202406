function at(index) {
    if (index === null) return this.value[0];
    debugger
    let result;
    debugger
    for (let i = 0; i < this.length; i++) {
      const character = this.value[i];
  
      if (i === index) result = character;
      else if (index < 0 && i === this.length + index) result = character;
    }
    return result;
  }
  debugger
  module.exports = at;