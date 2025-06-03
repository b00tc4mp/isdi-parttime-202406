const Biblio = require("./constructor.js")

function every(callback) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Argument of every needs to be a function')
    }

    let result = true

    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) return false 
    }

    return result
}

module.exports = every