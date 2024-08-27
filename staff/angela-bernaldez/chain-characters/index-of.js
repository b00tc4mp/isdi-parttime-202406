//str.indexOf(searchString, startPosition)
//Version stand alone!
function indexOf(searchString, startPosition = 0) {

    if (typeof searchString !== 'string') return -1

    if (startPosition > this.length) return -1 
    
    if (startPosition < 0 ) startPosition = 0  
    
    let result = -1 

    for (let i = startPosition; i < this.length - searchString.length; i++) {
        let found = true
        for (let j = 0; j < searchString.length; j++) {
            if (this.value[i + j]  !== searchString[j]) { 
                found = false
                break 
            }
        }
        if (found) {
            return i
        }
    }
    return -1   
}

module.exports = indexOf


