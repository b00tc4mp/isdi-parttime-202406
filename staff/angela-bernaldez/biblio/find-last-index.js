function findLastIndex(callback) {

    if (typeof callback !== 'function') {
        throw TypeError('Argument of findLastIndex needs to be a function')
    }
    
    let lastIndex = -1 

    let i = this.length - 1 
    while (i > 0 && lastIndex === -1) {
        if (callback(this[i])) return i
        i--
    }

    return lastIndex 
}

module.exports = findLastIndex