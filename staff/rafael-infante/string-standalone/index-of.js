function indexOf(string, searchTerm) {

  if (searchTerm === null) return -1;
  if (searchTerm === '') return 0;
  
  
  
  let result = 0
  let count = 0
  for (let i = 0; i < string.length; i++) {
      
      for (let j = 0; j < searchTerm.length; j++){
          let characterOfString = string[i + j];
          let characterOfSearchTerm = searchTerm[j];
          

          if (characterOfString === characterOfSearchTerm){
              count++
              if (count === searchTerm.length) {
                  
                  return i
              } 
              
          }
  
      }
  }
  
  
}

const result1 = indexOf("Hello, my name is Carl", "l");
console.assert(result1 === "Hello, my name is Carl".indexOf("l"), { result: result1, message: "Test 1 No pasado "});
if (result1 === "Hello, my name is Carl".indexOf("l")) console.log('Test 1 pasado');

const result2 = indexOf("Hello, my name is Carl", "my");
console.assert(result2 === "Hello, my name is Carl".indexOf("my"), { result: result2, message: "Test 2 No pasado "});
if (result2 === "Hello, my name is Carl".indexOf("my")) console.log('Test 2 pasado');

const result3 = indexOf("Lamine Yamal cada dia te quiero más", "");
console.assert(result3 === "Lamine Yamal cada dia te quiero más".indexOf(""), { result: result3, message: "Test 3 No pasado "});
if (result3 === "Lamine Yamal cada dia te quiero más".indexOf("")) console.log('Test 3 pasado');

const result4 = indexOf("Chiquito de la calzada", null);
console.assert(result4 === "Chiquito de la calzada".indexOf(null), { result: result4, message: "Test 4 No pasado "});
if (result4 === "Chiquito de la calzada".indexOf(null)) console.log('Test 4 pasado');


