const Biblio = require("./constructor.js")

function findLast(callback) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Argument of findLast needs to be a function')
    }
    
    let lastFound = undefined 

    let i = this.length - 1
    while (i > 0 && lastFound === undefined) {
        if (callback(this[i])) return this[i]
        i--
    }

    return lastFound 
}

module.exports = findLast