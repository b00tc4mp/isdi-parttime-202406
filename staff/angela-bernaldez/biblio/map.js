const Biblio = require("./constructor.js")

function map(callback) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Argument of map needs to be a function')
    }

    let newArray = new Biblio()

    for (let i = 0; i < this.length; i++) {
        newArray[newArray.length] = callback(this[i])
        newArray.length++
    }

    return newArray
}

module.exports = map