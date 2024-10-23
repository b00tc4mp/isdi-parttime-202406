const Biblio = require("./constructor.js")

function findIndex(callback) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Argument of findIndex needs to be a function')
    }

    let index = -1

    let i = 0 
    while (i < this.length && index === -1) {
        if (callback(this[i])) return i
        i++
    }

    return index 
}

module.exports = findIndex