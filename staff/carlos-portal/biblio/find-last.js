const Biblio = require("./constructor.js");
   function findLast(callback) {
     let result = undefined;
     let i = this.length - 1;
   
     while (i >= 0 && result === undefined) {
       const element = this[i];
       if (callback(element)) result = this[i];
   
       i--;
     }
     return result;
   }
   
   module.exports = findLast;
   