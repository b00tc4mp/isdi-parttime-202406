const ChainCharecters = require("./constructor.js")

function slice(indexStart, indexEnd = this.length) {

    let result = ''

    if (indexStart === undefined) indexStart = 0

    if (indexStart < 0) indexStart = Math.max(0, this.length + indexStart)
    if (indexEnd < 0) indexEnd = Math.max(0, this.length + indexEnd)

    if (indexStart > this.length) indexStart = this.length
    if (indexEnd > this.length) indexEnd = this.length
    if (indexStart > indexEnd) return new ChainCharecters("")


    for (let i = indexStart; i < indexEnd; i++) {
        result += this.value[i]
    }

    return new ChainCharecters(result)
}

module.exports = slice






