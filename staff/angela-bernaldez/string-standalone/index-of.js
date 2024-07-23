//str.indexOf(searchString, startPosition)
//Version stand alone!
function indexOf(string, searchString, startPosition = 0) {

    if (typeof searchString !== 'string') return -1

    if (startPosition > string.length) return -1 
    
    if (startPosition < 0 ) {
        startPosition = 0   
    } 
    
    let result = -1 

    for (let i = startPosition; i < string.length-searchString.length; i++) {
        let found = true
        for (let j = 0; j < searchString.length; j++) {
            if (string[i + j]  !== searchString[j]) { 
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


const paragraph = "I think Ruth's dog is cuter than your dog!";

const result1 = indexOf(paragraph, "dog");
console.assert(result1 === paragraph.indexOf("dog"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = indexOf(paragraph, "dog", 15);
console.assert(result2 === paragraph.indexOf("dog", 15), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = indexOf(paragraph, "dog", 40);
console.assert(result3 === paragraph.indexOf("dog", 40), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = indexOf(paragraph, null);
console.assert(result4 === paragraph.indexOf(null), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = indexOf(paragraph, undefined);
console.assert(result5 === paragraph.indexOf(undefined), {
  result: result5,
  message: "Test 5 No pasado ",
});