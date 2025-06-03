


function sliceString(str, characterInicial, characterFinal) {
  let result = '';
     if (characterInicial < 0) {
       characterInicial += str.length;}
    if (typeof characterInicial  === undefined) {
      characterInicial === 0;}
    if (typeof characterFinal === undefined) {
        characterFinal = str.length;}
      characterInicial = Math.max(0, Math.min(characterInicial, str.length));
      characterFinal = Math.max(0, Math.min(characterFinal, str.length));
    
    for (let i = characterInicial; i < characterFinal && i < str.length; i++) {
      result += str[i]    
      
    }
  return result
    }     
  
  const result1 = sliceString('hola mundo',0,3)
  console.assert(result1 === 'hola mundo'.slice(0,3), {result: result1, message: "Test 1 No pasado "})
  

const result2 = sliceString('hola mundo',5,7)
  console.assert(result2 === 'hola mundo'.slice(5,7), {result: result1, message: "Test 2 No pasado "})

const result3 = sliceString('hola mundo',-1,3)
  console.assert(result3 === 'hola mundo'.slice(-1,3), {result: result1, message: "Test 3 No pasado "})

const result4 = sliceString('hola mundo',0,12)
  console.assert(result4 === 'hola mundo'.slice(0,12), {result: result1, message: "Test 4 No pasado "})