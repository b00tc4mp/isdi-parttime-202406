//str.includes(searchString)
//Version stand alone
function includes(searchString) {
  
  if (searchString === null) return false;

  let result = false;

  for (let i = 0; i < this.length; i++) {
    let countMatches = 0;

    for (let j = 0; j < searchString.length; j++) {
      if (this.value[i + j] === searchString[j]) countMatches++;
    }
    
    if (countMatches === searchString.length) result = true;
  }
  return result;
}

module.exports = includes



