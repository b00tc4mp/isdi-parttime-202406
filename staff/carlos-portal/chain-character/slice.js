function slice(start) {
    let result = "";
  
    for (let i = start; i < this.length; i++) {
      result += this.value[i];
    }
  
    return result;
  }
  
  