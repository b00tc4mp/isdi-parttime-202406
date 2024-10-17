function push() {

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
    }

    // returns the new length
    return this.length
}

module.exports = push