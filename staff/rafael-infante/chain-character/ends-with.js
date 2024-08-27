//string.prototype.endsWith()

function endsWith(pattern) {
  let result = true;
  if (pattern === null) return false;
  
  let j = pattern.length - 1;

  for (let i = this.length - 1; j >= 0; i--) {
      if (pattern[j] !== this.value[i]) {
          result = false;
          break;
      }
      j--;
  }
  return result
  }

  module.exports = endsWith;