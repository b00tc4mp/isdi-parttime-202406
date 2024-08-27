function trim() {
  let newWord = '';
  for (let i = 0; i < this.length; i++) {
      if (this.value[i] !== ' ') {
          newWord += this.value[i]
      }
  } 
       return newWord
}

module.exports = trim;