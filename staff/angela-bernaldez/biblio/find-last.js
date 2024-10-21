function findLast(callback) {

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