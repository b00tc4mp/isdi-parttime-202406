const Biblio = require("./constructor.js")

function some(callback) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Argument of some needs to be a function')
    }
    
    let result = false

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) return true 
    }

    return result
}

module.exports = some