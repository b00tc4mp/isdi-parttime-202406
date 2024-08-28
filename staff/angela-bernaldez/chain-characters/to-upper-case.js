const ChainCharacters = require("./constructor.js")

function toUpperCase() {

    if (typeof this.value !== 'string') throw new SyntaxError('Invalid or unexpected token')

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let result = ''

    for (let i = 0; i < this.length; i++) {
        let found = false
        for (let j = 0; j < lowercase.length; j++) {
            if (this.value[i] ===lowercase[j]) {
                // change that character from uppercase to lowercase
                result += uppercase[j]
                found = true
                break 
            } 
        }
        if (!found) result += this.value[i]
    }

    return new ChainCharacters(result)
}

module.exports = toUpperCase






