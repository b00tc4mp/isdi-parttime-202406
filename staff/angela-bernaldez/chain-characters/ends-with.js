//str.endsWith(searchString, endPosition)
//Version stand alone!
function endsWith(searchString, endPosition = this.length) {

    if (typeof searchString !== 'string') return false
    else if (searchString === "") return true     
    
    let result = true 

    for (let i = 0; i < searchString.length; i++) {
        if (this.value[endPosition - searchString.length + i] !== searchString[i]) { 
            result = false
            break 
        }
    }
    return result   
}

module.exports = endsWith


 

