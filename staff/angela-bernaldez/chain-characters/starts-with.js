//str.startsWith(searchString, startPosition)
//Version stand alone!
function startsWith(searchString, startPosition = 0) {

    if (typeof searchString !== 'string') return false
    else if (searchString === '') return true     
    
    let result = true 

    for (let i = 0; i < searchString.length; i++) {
        if (this.value[startPosition + i] !== searchString[i]) { 
            result = false
            break 
        }
    }
    return result   
}

module.exports = startsWith






