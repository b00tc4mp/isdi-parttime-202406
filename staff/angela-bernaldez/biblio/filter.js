const Biblio = require("./constructor.js")

function filter(callback) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of filter needs to be a function')
    }

    const newArray = new Biblio()

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray[newArray.length] = this[i]
            // need to manually update length property
            newArray.length++
        }
    }

    return newArray
}

module.exports = filter 