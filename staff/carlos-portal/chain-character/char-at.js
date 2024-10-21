function charAt(index) {
    let result = this.value[index];
  
    if (typeof index !== "number") {
      result = string[0];
    } else if (index >= this.value.length) {
      result = "";
    }
  
    return result;
  }     

module.exports = charAt;