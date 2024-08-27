/* recibo un string y un patron, si ese string inicia con ese patron
se devuelve true*/

function startsWith(pattern) {
  let result = true;
  if (pattern === null) return false;
  
  let j = 0;

  for (let i = 0; j < pattern.length; i++) {
      if (pattern[j] !== this.value[i]) {
          result = false;
          break;
      }
      j++;
  }
  return result
  }

module.exports = startsWith;