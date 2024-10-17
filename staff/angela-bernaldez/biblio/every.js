function every(callback) {

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