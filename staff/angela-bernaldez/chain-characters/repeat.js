const ChainCharacters = require("./constructor.js")

function repeat(count) {

    if (count < 0 || count == Infinity) {
        throw new RangeError(`Invalid count value: ${count}`);
    }

    count = Math.floor(count)

    let result = ''
    for (let i = 0; i < count; i++) {
        result += this.value
    }

    return new ChainCharacters(result)   
}

module.exports = repeat




