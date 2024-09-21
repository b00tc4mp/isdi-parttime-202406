const ChainCharacters = require("./contructor");

/**
 * Converts the current value to uppercase.
 *
 * @returns {ChainCharacters} A new ChainCharacters instance with the converted value.
 */
function toUpperCase() {
  let result = "";
  const converter = [
    ["a", "A"],
    ["á", "Á"],
    ["b", "B"],
    ["c", "C"],
    ["d", "D"],
    ["e", "E"],
    ["f", "F"],
    ["g", "G"],
    ["h", "H"],
    ["i", "I"],
    ["j", "J"],
    ["k", "K"],
    ["l", "L"],
    ["m", "M"],
    ["n", "N"],
    ["o", "O"],
    ["p", "P"],
    ["q", "Q"],
    ["r", "R"],
    ["s", "S"],
    ["t", "T"],
    ["u", "U"],
    ["v", "V"],
    ["w", "W"],
    ["x", "X"],
    ["y", "Y"],
    ["z", "Z"],
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

module.exports = toUpperCase;
