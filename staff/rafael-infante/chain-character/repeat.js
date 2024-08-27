/* string.prototype.repeat() */

function repeat(number) {
  let newPhrase = '';

  for (let i = 0; i < number; i++){
      newPhrase += this.value
  }
  return newPhrase
}

module.exports = repeat;