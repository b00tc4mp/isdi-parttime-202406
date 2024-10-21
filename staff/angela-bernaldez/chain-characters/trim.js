const ChainCharacters = require("./constructor")

function trim() {

    // The trim() method of String values removes whitespace from both ends of this string 
    // and returns a new string, without modifying the original string.

    let result = ''

    // initialize start and end positions for looping

    let start = 0 
    let end = this.length - 1

    // identify where the start and end positions are 

    while (start <= end && this.value[start] === " ") start++

    while (end >= start && this.value[end] === " ") end--

    for (let i = start; i <= end; i++) {
        result += this.value[i]
    }

    return new ChainCharacters(result);
}

module.exports = trim



