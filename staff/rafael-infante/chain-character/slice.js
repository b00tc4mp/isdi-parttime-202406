function slice(index1, index2) {
  let palabra = ''
      if (this.length > 0) {
          for (let i = index1; i < index2; i++) {
            palabra += this.value[i]
           }
        return palabra
      } else {
          return '';
      }
   
}
module.exports = slice;
