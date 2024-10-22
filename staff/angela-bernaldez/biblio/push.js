const Biblio = require("./constructor.js")

function push() {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
    }

    // returns the new length
    return this.length
}

module.exports = push