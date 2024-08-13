function ChainCharacter(value) {
  let _length = 0;
  while (value[_length]) _length++;

  this.length = _length;
  this.value = value;
}

module.exports = ChainCharacter;
