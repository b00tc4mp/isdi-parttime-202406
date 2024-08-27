// String.prototype.indexof()
function indexOf(searchTerm) {

  if (searchTerm === null) return -1;
  if (searchTerm === '') return 0;
  
  
  
  let result = 0
  let count = 0
  for (let i = 0; i < this.length; i++) {
      
      for (let j = 0; j < searchTerm.length; j++){
          let characterOfString = this.value[i + j];
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

module.exports = indexOf;