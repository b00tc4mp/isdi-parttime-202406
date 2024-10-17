function reverse() {
    
    let start = 0 
    let end = this.length - 1

    while (start < end) {
        let temp = this[start]
        this[start] = this[end]
        this[end] = temp 

        // increment start and decrease end to move towards the middle and cover all elements
        start++
        end--
    }

    return this
}

module.exports = reverse 