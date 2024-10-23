const Biblio = require("./constructor.js")

function forEach(callback) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Argument of forEach needs to be a function')
    }
    
    let i = 0
    while (i < this.length) {
        // need to update each array position with the new value - result of executing the provided function on that element
        callback(this[i], i, this)
        i++
    }
}

module.exports = forEach