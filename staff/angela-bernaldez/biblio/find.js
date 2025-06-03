const Biblio = require("./constructor.js")

function find(callback) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Argument of find needs to be a function')
    }
    
    let found = undefined 

    let i = 0 
    while (i < this.length && found === undefined) {
        if (callback(this[i])) return this[i]
        i++
    }

    return found 
}

module.exports = find