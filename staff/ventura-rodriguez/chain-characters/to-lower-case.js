const ChainCharacters = require("./contructor");

/**
 * Converts the current value to lowercase.
 *
 * @returns {ChainCharacters} A new ChainCharacters instance with the converted value.
 */
function toLowerCase() {
  let result = "";
  const converter = [
    ["A", "a"],
    ["B", "b"],
    ["C", "c"],
    ["D", "d"],
    ["E", "e"],
    ["F", "f"],
    ["G", "g"],
    ["H", "h"],
    ["I", "i"],
    ["J", "j"],
    ["K", "k"],
    ["L", "l"],
    ["M", "m"],
    ["N", "n"],
    ["O", "o"],
    ["P", "p"],
    ["Q", "q"],
    ["R", "r"],
    ["S", "s"],
    ["T", "t"],
    ["U", "u"],
    ["V", "v"],
    ["W", "w"],
    ["X", "x"],
    ["Y", "y"],
    ["Z", "z"],
  ];

  for (let i = 0; i < this.length; i++) {
    const character = this.value[i];

    for (let j = 0; j < converter.length; j++) {
      const value = converter[j];
      if (character === value[0]) {
        result += value[1];
      }
    }
    if (result.length !== i + 1) {
      result += character;
    }
  }

  return new ChainCharacters(result);
}

module.exports = toLowerCase;
