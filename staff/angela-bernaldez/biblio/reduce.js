const Biblio = require("./constructor.js")

function reduce(callback, initialValue = undefined) {

    if (typeof callback !== 'function') {
        throw TypeError('Argument of reduce needs to be a function');
    }

    let accumulator = new Biblio()
    let start 

    if (typeof initialValue !== 'undefined') {
        accumulator = initialValue
        start = 0
    } else {
        accumulator = this[0]
        start = 1
    }

    for (let i = start; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }

    return accumulator
}

module.exports = reduce 